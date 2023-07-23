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
import  {TauxTaxTnbDto}  from '/pages/controller/model/TauxTaxTnb.model';

const View = ({visible,onClose,selectedItem}) => {

    const emptyItem = new TauxTaxTnbDto();
    const [item, setItem] = useState<TauxTaxTnbDto>(emptyItem);
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
<Dialog visible={visible} style={{width: '70vw'}} header="TauxTaxTnb Details" modal className="p-fluid" footer={itemDialogFooter} onHide={hideDialog} >
<TabView activeIndex={activeIndex} onTabChange={onTabChange}>
<TabPanel header="TauxTaxTnb">
    <div className="formgrid grid">

                <div className="field col-6">
                    <label htmlFor="prixMetreCarre">PrixMetreCarre</label>
                    <InputNumber id="prixMetreCarre" value={item.prixMetreCarre} disabled/>
                </div>

                <div className="field col-6">
                    <label htmlFor="prixRetardMetreCarre">PrixRetardMetreCarre</label>
                    <InputNumber id="prixRetardMetreCarre" value={item.prixRetardMetreCarre} disabled/>
                </div>

                <div className="field col-6">
                    <label htmlFor="categorieTerrain">CategorieTerrain</label>
                    <Dropdown  id="categorieTerrainDropdown"  value={selectedItem?.categorieTerrain?.libelle}  disabled  />
                </div>
        </div>
</TabPanel>
</TabView>
</Dialog>
);
};
export default View;
