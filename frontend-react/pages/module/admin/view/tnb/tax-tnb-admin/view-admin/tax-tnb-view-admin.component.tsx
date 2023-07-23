import {Button} from 'primereact/button';
import {Column} from 'primereact/column';
import {Dropdown} from 'primereact/dropdown';
import {TabView, TabPanel} from 'primereact/tabview';
import {DataTable} from 'primereact/datatable';
import {Dialog} from 'primereact/dialog';
import {InputNumber, InputNumberChangeEvent} from 'primereact/inputnumber';
import {InputText} from 'primereact/inputtext';
import {classNames} from 'primereact/utils';
import { InputTextarea } from 'primereact/inputtextarea';
import {AxiosResponse} from 'axios';
import React, {useEffect, useState} from 'react';
import {Calendar, CalendarChangeEvent} from 'primereact/calendar';
import { format } from 'date-fns';
import { InputSwitch } from "primereact/inputswitch";
import {MultiSelect} from "primereact/multiselect";
import  {TaxTnbDto}  from '/pages/controller/model/TaxTnb.model';

const View = ({visible,onClose,selectedItem}) => {

    const emptyItem = new TaxTnbDto();
    const [item, setItem] = useState<TaxTnbDto>(emptyItem);
    const [submitted, setSubmitted] = useState(false);
    const [activeIndex, setActiveIndex] = useState<number>(0);

    useEffect(() => {
        setItem(selectedItem ? { ...selectedItem } : { ...emptyItem });
    }, [selectedItem]);

    const onTabChange = (e: { index: number }) => {
        setActiveIndex(e.index);
    };

    const hideDialog = () => {
        setSubmitted(false);
        onClose();
    };

    const itemDialogFooter = ( <>
        <Button label="Cancel" icon="pi pi-times" text onClick={hideDialog} /> < />
    );

return(
<Dialog visible={visible} style={{width: '70vw'}} header="TaxTnb Details" modal className="p-fluid" footer={itemDialogFooter} onHide={hideDialog} >
<TabView activeIndex={activeIndex} onTabChange={onTabChange}>
<TabPanel header="TaxTnb">
    <div className="formgrid grid">

                <div className="field col-6">
                    <label htmlFor="annee">Annee</label>
                    <InputNumber id="annee" value={item.annee} disabled/>
                </div>

                <div className="field col-6">
                    <label htmlFor="montantBase">MontantBase</label>
                    <InputNumber id="montantBase" value={item.montantBase} disabled/>
                </div>

                <div className="field col-6">
                    <label htmlFor="mantantRetard">MantantRetard</label>
                    <InputNumber id="mantantRetard" value={item.mantantRetard} disabled/>
                </div>

                <div className="field col-6">
                    <label htmlFor="nombreMoisRetard">NombreMoisRetard</label>
                    <InputNumber id="nombreMoisRetard" value={item.nombreMoisRetard} disabled/>
                </div>

                <div className="field col-6">
                    <label htmlFor="montantTotal">MontantTotal</label>
                    <InputNumber id="montantTotal" value={item.montantTotal} disabled/>
                </div>

        <div className="field col-6">
            <label htmlFor="datePresentation">DatePresentation</label>
            <Calendar id="datePresentation" value={selectedItem?.datePresentation} disabled dateFormat="dd/mm/yy" showTime />
        </div>

        <div className="field col-6">
            <label htmlFor="dateTaxeTnb">DateTaxeTnb</label>
            <Calendar id="dateTaxeTnb" value={selectedItem?.dateTaxeTnb} disabled dateFormat="dd/mm/yy" showTime />
        </div>

                <div className="field col-6">
                    <label htmlFor="redevable">Redevable</label>
                    <Dropdown  id="redevableDropdown"  value={selectedItem?.redevable?.cin}  disabled  />
                </div>
                <div className="field col-6">
                    <label htmlFor="terrain">Terrain</label>
                    <Dropdown  id="terrainDropdown"  value={selectedItem?.terrain?.ref}  disabled  />
                </div>
                <div className="field col-6">
                    <label htmlFor="tauxTaxTnb">TauxTaxTnb</label>
                    <Dropdown  id="tauxTaxTnbDropdown"  value={selectedItem?.tauxTaxTnb?.id}  disabled  />
                </div>
        </div>
</TabPanel>
</TabView>
</Dialog>
);
};
export default View;
