import { LightningElement, api } from 'lwc';
import fontAwesome from '@salesforce/resourceUrl/FontAwesome';
import { loadStyle, loadScript } from 'lightning/platformResourceLoader';

export default class IndicatorListItem extends LightningElement {
    @api indSize = 'large';
    @api indShape = 'base';
    @api indText = '⛳';
    @api indImage = '';
    @api indIcon = 'standard:marketing_actions';
    @api indHoverText = '';
    @api useFontAwesome; 

    get indClass() {
        return this.indSize == 'large' ? 'slds-var-m-right_small slds-var-m-vertical_medium' : this.indIcon == 'none' ? 'slds-var-m-right_xxx-small slds-var-m-vertical_small slds-avatar__initials_inverse' : 'slds-var-m-right_x-small slds-var-m-vertical_small';
    }

    connectedCallback(){
        this.useFontAwesome = this.indIcon?.includes('fa');
        console.log('icon: ' + this.indIcon );
        console.log('useFontAwesome: ' + this.useFontAwesome );
        Promise.all([
            loadStyle(this, fontAwesome + '/fontawesome-free-6.2.1-web/css/all.css'),
            loadScript(this, fontAwesome + '/fontawesome-free-6.2.1-web/js/all.js')
        ]).then(() => { 
            /* callback */ 
        });
    }
}