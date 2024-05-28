import React from "react";
import './cards-style.css';

export function Card(props) {

    const features = {
        Basic: [
            {text: "Access to basic features", included: true},
            {text: "Email support", included: true},
            {text: "No ad-free experience", included: false},
            {text: "Limited customization", included: false},
            {text: "Standard updates", included: true}
        ],
        Standard: [
            {text: "Access to standard features", included: true},
            {text: "Priority email support", included: true},
            {text: "Ad-free experience", included: true},
            {text: "Moderate customization", included: true},
            {text: "Priority updates", included: true}
        ],
        Premium: [
            {text: "Access to all features", included: true},
            {text: "24/7 support", included: true},
            {text: "Ad-free experience", included: true},
            {text: "Full customization", included: true},
            {text: "Instant updates", included: true}
        ]
    };

    return (
        <main className="pricing-card">
            <div className="card-content">
                <div className="card-header">{props.tarif}</div>
                <div className="price-box">
                    <div className="price">{props.price}</div>
                    <div className="per-month">per month</div>
                </div>
                <div className="features-list">
                    {features[props.tarif].map((feature, index) => (
                        <div key={index} className={`feature ${feature.included ? 'check' : 'cross'}`}>
                            {feature.text}
                        </div>
                    ))}
                </div>
                <div className="subscribe-button">Select Package</div>
            </div>
        </main>
    );
}
