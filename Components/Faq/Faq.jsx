import React from "react";
import FaqRow from "../../Components/FaqRow/FaqRow";
function Faq() {
  const data = [
    {
        "ques": "Where can I find the app?",
        "answer":
        "Curate is available in the App store (for Apple). Simply search Curate Health.",
    },
    {
        "ques": "Why do I need curate?",
        "answer":
        "Curate makes taking care of your health easy. The app asks you some basic questions and then generates your digital health profile. From here, Curate chooses the best supplements for you, analyses and assesses your health, points out potential problems, provides useful recommendations, offers expert advice on topics you're interested in, and helps you monitor vitamin levels or even lose weight.",
    },
    {
        "ques": "What does Curate do?",
        "answer":
        "Curate provides personalised supplements curated using your health data. Curate analyses your health data to offer an accurate, personalised and bespoke vitamin solution for health optimisation.",
    },
    {
        "ques": "Why should I trust Curate?",
        "answer":
        "Curate is a science-based app created by doctors, healthcare professions & nutritionists. Our board is made up of specialists across a variety of medical fields. Only professional doctors advise users so you can feel safe knowing that your information comes from the right source.",
    },
    {
        "ques": "Can I use the app even if I don't have a wearable?",
        "answer":
        "You can still use the app without a device and track your weight and mind ratings. For Apple users Curate connects with the Health App within a compatible iPhone and therefore steps will be recorded. If you have a relevant third-party sleep app, then sleep ratings will also be recorded.",
    },
    {
        "ques": "What information does the app collect?",
        "answer":
        "We receive certain information from you when you create a Curate Health account, such as your email address, your name, and your date of birth. To provide you with the most personalised experiences and insights from Curate, we may, from time to time, ask you for further information, such as how your health has been in the past. Curate looks at health across a broad range of health topics and we know that some of these can be very sensitive and personal to you. By capturing user data across such a diverse range of topics, we hope that we can better shape how our users can proactively take steps to predict, prevent, and even potentially reverse their future health experiences. We understand that there may be certain information you are not comfortable sharing with Curate and this is perfectly acceptable. We would not expect you to share any information that you are not comfortable sharing with us.",
    },
    {
        "ques": "What will you do with the data the app collects?",
        "answer":
        "We believe that data can play a crucial role in how we can help to predict, prevent, and even reverse some of life's most challenging health issues. By combining your data with that of thousands of other Curate users, we can build a better understanding of what influences our health outcomes as well as providing you with tailored advice, insights, products, and services that we believe could further improve your overall health and wellbeing. In doing so, we may share your data with trusted 3rd parties.",
    },
    {
        "ques": "Will any of my data be shared with my employer?",
        "answer":
        "We will never share your personal health data or history directly with your employer.  For employers whose employees are using Curate, we will only ever provide anonymised reporting and only where there is a sufficient number of active employee users to ensure that individual employees and their health data is not identifiable by the employer.",
    },
    {
        "ques": "How long will you store my data for?",
        "answer":
        "We retain your personal information only for the period necessary to fulfil those purposes set out in this privacy policy. When assessing the retention periods for any personal information we collect, we review our need to collect personal information at all and, subject to establishing a relevant need, only retain personal information for the shortest period possible to realise the purpose of collection, unless a longer retention period is required by law.",
    },
    {
        "ques": "Is my personal data safe?",
        "answer":
        "The safety of your data is our top priority. We make sure to use a variety of technologies and procedures to help protect your personal information from unauthorised access, use or disclosure and preserve the confidentiality, integrity and availability of your personal information. You can find more detail in the privacy policy.",
    },
    {
        "ques": "Is it important to share my health data?",
        "answer":
        "We believe that data can play a crucial role in how we can help to predict, prevent, and even reverse some of life's most challenging health issues. By combining your data with that of thousands of other Curate users, we can build a better understanding of what influences our health outcomes, as well as providing you with tailored advice, insights, products and services that we believe could further improve your overall health and wellbeing. In doing so, we may share your data with trusted 3rd parties.",
    },
    {
        "ques": "Who can use the curate products?",
        "answer":
        "Our products are designed for anyone over the age of 18. Whether you are a nutrition buff, just starting a health kick, trying to conceive, already pregnant, or training for an event, we have the supplements and nutrition tests for you!",
    },
    {
        "ques": "How do I contact Curate",
        "answer":
        "You can get in touch with us with any questions or comments via email - info@curatehealth.co.uk. Our customer services team will get back to you as soon as they can and their hours are 9am - 5.30pm, Monday - Friday (excluding bank holidays). We'd love to hear from you!",
    }
  ];
  return (
    <div className="faq">
      <h1 className="roboto">Frequently Asked Questions</h1>
      <div className="faq-grid">
        {data.map((elem, key) => {
          return (
            <FaqRow
              key={"faqrow" + key}
              ques={elem.ques}
              answer={elem.answer}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Faq;
