import React from "react";
import { Row, Col } from "react-bootstrap";
import "../../assets/CSS/VideoConsultCSS/QuestionAnswerContent.css";

import ContentBaseType from "../../Components/ContentsType/ContentBaseType";

const faqs = [
  {
    question: "When will I get an answer to my query? What happens if I don’t get a response?",
    answer: "If you opt for a free consult, then we make sure the doctor replies within 24 to 48 hours. In case of a paid consult, you will receive a reply within 2-4 business hours. However, if you do not get any response within the stipulated time, we will refund your money back into your account."
  },
  {
    question: "Who are the consulting doctors?",
    answer: "All the doctors are registered medical practitioners. Along with qualifying degrees - experience, research, and track-record of practice are taken into account before a doctor is credentialed."
  },
  {
    question: "Will the doctor be able to resolve my issue?",
    answer: "Our doctors will give you expert advice on your problem and help you identify next steps, which may include further tests, medicine recommendations, or lifestyle tips."
  },
  {
    question: "Is my consultation private with my doctor?",
    answer: "Privacy of data is one of the fundamental human rights. All your medical history and online consultations with us are completely private and confidential."
  },
  {
    question: "For how long is the consultation valid?",
    answer: "In the case of a paid consult, you can follow up with your doctor for up to 3 days. Free consultations allow follow-ups for one day only."
  },
  {
    question: "Do you have a refund policy?",
    answer: "We have a “take-it-easy” policy. If you're not satisfied with your online consultation, you can write to us and we will review the consult. 100% refund will be given in genuine cases."
  }
];

const QuestionAnswerContent = () => {
  return (
    <div className="qa-container">
      <p className="qa-title"><ContentBaseType heading="Frequently Asked Questions" /></p>
      <Row className="justify-content-center">
        <Col md={12}>
          {faqs.map((faq, index) => (
            <div key={index}>
              <div className="qa-item">
                {/* <p className="qa-question">{faq.question}</p> */}
                <p className="qa-question"><ContentBaseType title={faq.question} /></p>
                <p className="qa-answer"><ContentBaseType content={faq.answer} /></p>
              </div>
              {index !== faqs.length - 1 && <hr />}
            </div>
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default QuestionAnswerContent;
