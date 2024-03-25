import os
from flask import Flask, render_template, request
import openai
from dotenv import load_dotenv #let us load envirmental files

load_dotenv() #loading the dot file
openai.api_key = os.environ["OPENAI_API_KEY"]



app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")



@app.route("/chatbot", methods=["POST"])
def chatbot():
    user_input = request.form["message"]
    #use the openai api to generate response
    
    prompt = f"User: {user_input}\nChatbot: "
    chat_history = []
    response = openai.Completion.create(
        engine="gpt-3.5-turbo-instruct",
        prompt=prompt,
        temperature=0.5,
        max_token=60,
        top_p= 1,
        frequency_penalty=0,
        stop=["\nUser: ", "\nChatbot: "]
    )
    #Extract the response text from the OpenAI API result
    bot_response = response.choices[0].text.strip()

    #add the user input and bot response to the chat history
    chat_history.append(f"User: {user_input}\nChatbot: {bot_response}" )
    
    #render the chatbot template with the response text
    return render_template(
        "chatbot.html",
        user_input = user_input,
        bot_response=bot_response,
    )





#start the flask app

if __name__ == "__main__": 
    app.run(debug=False, host="0.0.0.0")
