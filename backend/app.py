from flask import Flask, request, jsonify
from model import GenModel
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
model = GenModel()

# Sample data for /trends endpoint
# Proof-of-Concept: refer to scraper.py for webscraper of trends
trends_data = {
    "Data": [
        {
      'trendId': 1,
      'header': "BEWARE OF FAKE FRIEND CALL SCAMS",
      'author': "anonymous",
      'date': "30/5/24",
      'body': "Cold call. He knew my name (but didn't say his) and started by informing me that he had changed to a new phone number. He then tried to trick me into mentioning a real friend's name."
    },
    {
      'trendId': 2,
      'header': "BEWARE OF JOB SCAMS",
      'author': "anonymous",
      'date': "26/5/24",
      'body': "I came across a job scam promising high pay with commission for working from home, Monday to Friday, 10am to 6pm. Pretending to be from: MMI Group Media. Here’s how it started: The company claimed they found your resume on a job website and offered you an easy admin job processing hotel bookings for Agoda, Booking.com, and Trip.com. Initially, they build trust by paying you via PayNow for completing tasks, with payment on the same day. However, on the second day, they ask you to pay for hotel bookings, promising to reimburse you plus a commission. They lead you to a room where you're presented with multiple bookings to pay even more. Some people post screenshots showing they transferred money to the company, but these are insiders trying to make you feel safe about transferring money. Once you pay, they ask for more money for additional bookings, claiming your group won't get paid unless you complete the bookings. They use guilt and fake testimonials to coerce you into paying more. Do not believe them."
    },
    {
      'trendId': 3,
      'header': "ONLINE FRIEND TURNED OUT TO BE A SCAMMER",
      'author': "anonymous",
      'date': "26/5/24",
      'body': "I met Sam on CMB in April 2024. According to his profile, he is from Australia but stays in Malaysia and works as a property project developer. Throughout our conversations on the app, he was polite and never pushy. Before our chatroom closed, I gave him my phone number for coffee if he came over to Singapore. Once we were on WhatsApp, he began professing his love for me, citing that I was different from his previous partners. He even insisted that we both delete our CMB profiles, which he did before me. He was attentive and remembered every detail I shared with him. However, the red flag was his refusal to meet up, even though we were just across the causeway. We chatted over text and WhatsApp calls for close to two months. Over the phone, he sounded Australian and spoke very well. During this time, he built up a story about rushing to complete his project and meeting me in Singapore in another two months. He also painted a beautiful picture of bringing me home to Sydney to meet his mum. He offered to do video calls, but somehow the video quality was always terrible and barely lasted for 30 seconds. After nearly two months of being in touch, he shared that the project's investor delayed his payment, and he needed to pay his workers from his personal funds. He also said that, in a bid to meet me earlier, he made the workers work overtime, which depleted his personal funds. He asked me for a loan of SGD 6,000. I refused, but he pestered me endlessly for two days. After this failed attempt, he disappeared, likely realising I was a bad candidate."
    },
    {
      'trendId': 4,
      'header': "I LOST $6K TO A JOB SCAM",
      'author': "anonymous",
      'date': "26/5/24",
      'body': "They first contacted me through a WhatsApp group chat for TripAdvisor and Shopee, sending a job link to Telegram. They taught me to simply click likes for shops to help sellers create awareness/popularity, offering $3-30 rewards every half hour. Next, they increased the job's difficulty by asking me to cart out items with very small amounts involved, around $2-3. They reimbursed me the amount paid with much better rewards ($10-50). At certain times of the day, they introduced higher return jobs (20-40%). They sent a link to create an account to complete the work order. First, I was asked to transfer the amount I wanted to work on, and they assigned the same amount of credits into the work page. After completing the task, I informed them in the Telegram group. They then told me there was another work order from the merchant that I needed to complete to get back the money I put in for the first job. There were no refunds if I didn't follow their instructions to complete all tasks. If I did complete them, they promised extra returns. "
    },
    {
      'trendId': 5,
      'header': "ALWAYS VERIFY BEFORE TAKING ON A JOB",
      'author': "anonymous",
      'date': "25/5/24",
      'body': "Got contacted by a recruiter on whats app asking if im looking for job, got referred to their recruiter claiming to be from \"moni-Media\", provided the company’s UEN details. Recruiter claimed the job task is to promote company brands on their website with a max of 30 promotes for each set. Within each set, there is a possibility that you get 2-3 “combined bonus” where your account balance will go negative and have to top up to withdraw to clear, complete and guaranteed able to withdraw. If you do not do as they say, your recruiter will call you and shout at you to say you are being irresponsible. They will also ask you to join their whatsapp chat group with other potential scammers to help your recruiter to give the false impression that it is legitimate. Beware of this job scam. When in doubt, google the actual Company and contact the management there through linkedin and verify legitimacy of the job"
    },
    {
      'trendId': 6,
      'header': "BEWARE OF JOB SCAMS",
      'author': "anonymous",
      'date': "23/5/24",
      'body': "Hotel Line? Assisting booking.com, trip.com, etc. It's a scam. I didn’t lose anything, but the company is non-existent. Remember, if it's an entity, there must be a legitimate office and website that you can easily track. Their trick is the same: high base pay plus commission for processing hotel orders. What will happen is they will ask you to wire money for the process to go through."
    }
    ],
    "Status": 200
}

@app.route('/questions', methods=['GET'])
def get_questions():
    questions = []
    for i in range(5):
        result = model.generate_question()
        qn_type = result[0]
        lst = result[1]
        if qn_type == 'mcq':
            data = {
                "questionType": "mcq",
                "question": lst[0],
                "options": lst[1],
                "answer": lst[2],
                "questionId": i + 1,
                "body": "",
            }
        else:
            data = {
                "questionType": "msg",
                "question": lst[0],
                "options": ["Yes", "No"],
                "answer": 0,
                "questionId": i + 1,
                "body": "",
            }
        questions.append(data)
    return jsonify(questions)

@app.route('/trends', methods=['GET'])
def get_trends():
    return jsonify(trends_data)

if __name__ == '__main__':
    app.run(debug=True)
    model = GenModel()