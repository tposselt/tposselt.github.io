import linkedInIcon from '@/assets/icons/linkedin.png'
import emailIcon from '@/assets/icons/email.png'
import gitHubIcon from '@/assets/icons/github.png'

export default function Contact() {
    return (
        <main>
            <div className="card">
                <h1 className="a-lot-bigger">
                        Contact
                </h1>
                <p className="a-little-bigger">
                    For business inquiries, see my business email address and LinkedIn profile below. I also have my GitHub
                    linked, but most of my projects can be found on the portfolio page. If you just want to
                    chat, you can join the Discord server I use to get feedback on my projects. 
                </p>
                <div className="icon-container">
                    <img src={linkedInIcon} className="icon" />
                    <img src={emailIcon} className="icon" />
                    <img src={gitHubIcon} className="icon" />
                </div>
            </div>
        </main>
    );
}