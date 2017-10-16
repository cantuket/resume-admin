import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash'

import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';

import '../../../../../node_modules/react-accessible-accordion/dist/react-accessible-accordion.css';

class AccordionComponent extends Component {
    renderBody(body){
        if (typeof  body === "string") {
            console.log('string');
            return (<div dangerouslySetInnerHTML={{__html:body}} />);   
        } else {
            console.log('npt string');
            return (<div>{body}</div>);
        }
    }
    renderItems() {
        const items = this.props.data;
        return _.map(items, (item, i) => {
            
            return (
                <AccordionItem key={i}>
                    <AccordionItemTitle>
                        <h5>{Object.keys(item)[0]}</h5>
                    </AccordionItemTitle>
                    <AccordionItemBody>
                        <div>
                            {this.renderBody(item[Object.keys(item)[0]])}
                        </div>
                    </AccordionItemBody>
                </AccordionItem>
            );
        });
    }
    render () {
        return (
            <Accordion>
                {this.renderItems()}
            </Accordion>
        );
    }
}


export default AccordionComponent