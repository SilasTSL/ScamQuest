import time
from bs4 import BeautifulSoup
import requests
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Initialize the webdriver (Make sure you have the appropriate driver for your browser)
driver = webdriver.Chrome()

# URL of the initial page
url = 'https://www.scamalert.sg/news'

# Open the webpage
driver.get(url)
print(driver.page_source)
# Loop through the pages
for i in range(2, 5):
    time.sleep(3)
    # Parse the page content
    soup = BeautifulSoup(driver.page_source, 'html.parser')
    
    # Find all divs with class 'card-body'
    card_bodies = soup.find_all('div', class_='card-body')
    
    for card_body in card_bodies:
        # Extract the article_date
        article_date = card_body.find_next('div').get_text()

        # Extract the <a> tag
        article_a_tag = card_body.find_next('a')
        
        # Extract the article_header and article_link from the <a> tag
        article_header = article_a_tag.get_text()
        article_link = article_a_tag['href']
        
        # Print the extracted information
        print(f'Date: {article_date}, Header: {article_header}, Link: {article_link}')
    
    try:
        # Increase the timeout to 10 seconds
        next_page_link = WebDriverWait(driver, 10).until(
            EC.element_to_be_clickable((By.XPATH, f"//li[@class='page-item']/a[@class='page-link' and contains(@onclick, 'pagingOnClick(\"{i+1}\")')]"))
        )
        next_page_link.click()
        WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.CLASS_NAME, 'card-body'))
        )  # Wait for the page to load
    except Exception as e:
        print(f"Failed to click the pagination link on page {i}. Error: {e}")
        break

# Close the driver
driver.quit()

'''
for i in range(1, 5):
    for div with tag "card-body"
        article_date = <text in next div tag>
        article_header = <text in following <a> tag>
        article_link = <href in previous <a> tag>
        
    after all divs with tag "card-body" has been parsed,

    click on <a class="page-link" href="javascript:void(0)" onclick="pagingOnClick(f'{i+1}')">2</a>



'''