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
        const { titre, type, text, list, isrow_2 } = this.props;
    
        return (
            <div className={`mb-5 ${isrow_2 ? 'row-2' : ''}`}>
                <button className={`accordion ${isOpen ? 'active' : ''}`} onClick={this.toggleAccordion}>
                    {titre}<span className={`arrow ${isOpen ? 'down' : 'up'}`}></span>
                </button>
                <div className={`panel ${isOpen ? 'open' : ''}`}>
                    <div>
                        {type === 'text' && <div className='accordeon_text'>{text}</div>}
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