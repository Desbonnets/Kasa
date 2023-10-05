import React, { Component } from 'react';

class AccordionComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isOpen: false, // État initial de l'accordéon fermé
        };
    }

    toggleAccordion = () => {
        this.setState((prevState) => ({
          isOpen: !prevState.isOpen,
        }));
      };

    render() {
        const { isOpen } = this.state;
        const { titre, type, text, list } = this.props;
    
        return (
            <div>
            <button className={`accordion ${isOpen ? 'active' : ''}`} onClick={this.toggleAccordion}>
                {titre}
            </button>
            <div className={`panel ${isOpen ? 'open' : ''}`}>
                <div>
                    {type === 'text' && <p>{text}</p>}
                    {type === 'list' && (
                    <ul>
                        {list.map((element, index) => (
                        <li key={index}>{element}</li>
                        ))}
                    </ul>
                    )}
                </div>
            </div>
            </div>
        );
    }
}

export default AccordionComponent;