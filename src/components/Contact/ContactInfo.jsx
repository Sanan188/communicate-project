import React from "react";
import contactLocationIcon from "../../assets/image/location-icon.png";
import contactEmailIcon from "../../assets/image/message-icon.png";
import contactPhoneIcon from "../../assets/image/phone-icon.png";

function ContactInfo() {
  const contacts = [
    {
      image: contactLocationIcon,
      title: "Address:",
      infos: ["Sumqayıt 13mkr", "Azerbaijan"],
    },
    {
      image: contactEmailIcon,
      title: "Email:",
      infos: ["senanabbasov2023@gmail.com", "senanabbasov04@mail.ru"],
    },
    {
      image: contactPhoneIcon,
      title: "Phone:",
      infos: ["+994 50 568 02 59", "+994 55 950 01 36"],
    },
  ];

  return (
    <aside className="contact__info">
      {contacts.map((contact, index) => {
        return (
          <div key={contact.title} className="contact__info-row">
            <div className="contact__info-logo">
              <img src={contact.image} alt={`Contact Logo ${index}`} />
            </div>
            <div className="contact__info-content">
              <h1>{contact.title}</h1>
              {contact.infos.map((info, index) => (
                <a key={index} href="#">
                  {info}
                </a>
              ))}
            </div>
          </div>
        );
      })}
    </aside>
  );
}

export default ContactInfo;
