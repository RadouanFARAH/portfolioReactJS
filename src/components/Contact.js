import React, { Component } from 'react'
import './Contact.css';

export class Contact extends Component {
    render() {
        return (
                <div id="contact">
                    <div className="contact-form">
                        <form>
                            <div className="contact-header">
                            <p className="fadeInUp animated">Contact me</p> 
                            </div>
                            <div className="input fadeInUp animated">
                            <input  type="text"
                                    id="name"
                                    placeholder="Your Name..."
                                    name="name"/> 
                            </div>
                            <div className="input fadeInUp animated">
                            <input  type="email"
                                    id="email"
                                    placeholder="Your email..."
                                    name="email"/>
                            </div>
                            <div className="input fadeInUp animated">
                                <textarea 
                                    id="msg" 
                                    placeholder="Your message..." 
                                    rows="3" 
                                    name="msg"></textarea>
                            </div>
                            <div className="submit fadeInUp animated">
                            <button type="submit">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
        )
    }
}

export default Contact
