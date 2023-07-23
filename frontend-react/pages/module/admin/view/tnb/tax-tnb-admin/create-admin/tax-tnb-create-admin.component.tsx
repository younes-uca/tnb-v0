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
import {InputNumberChangeEvent} from 'primereact/inputnumber';
import { InputSwitch } from "primereact/inputswitch";
import {MultiSelect} from "primereact/multiselect";
import {MessageService} from "/pages/controller/service/MessageService";
import {TaxTnbService} from '/pages/controller/service/TaxTnb.service';
import  {TaxTnbDto}  from '/pages/controller/model/TaxTnb.model';
import {TerrainDto} from '/pages/controller/model/Terrain.model';
import {TerrainService} from '/pages/controller/service/Terrain.service';
import {RedevableDto} from '/pages/controller/model/Redevable.model';
import {RedevableService} from '/pages/controller/service/Redevable.service';
import {TauxTaxTnbDto} from '/pages/controller/model/TauxTaxTnb.model';
import {TauxTaxTnbService} from '/pages/controller/service/TauxTaxTnb.service';
const Create = ({visible, onClose, add, showToast, list}) => {

    const emptyItem = new TaxTnbDto();
    const [items, setItems] = useState<TaxTnbDto[]>([list]);
    const [item, setItem] = useState<TaxTnbDto>(emptyItem);
    const [submitted, setSubmitted] = useState(false);
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [activeTab, setActiveTab] = useState(0);

    const [redevables, setRedevables] = useState<RedevableDto[]>([]);
    const [terrains, setTerrains] = useState<TerrainDto[]>([]);
    const [tauxTaxTnbs, setTauxTaxTnbs] = useState<TauxTaxTnbDto[]>([]);

    type TerrainResponse = AxiosResponse<TerrainDto[]>;
    type RedevableResponse = AxiosResponse<RedevableDto[]>;
    type TauxTaxTnbResponse = AxiosResponse<TauxTaxTnbDto[]>;


    useEffect(() => {
        const fetchData = async () => {
            try {
                const [redevablesResponse ,terrainsResponse ,tauxTaxTnbsResponse ] = await Promise.all<RedevableResponse,TerrainResponse,TauxTaxTnbResponse>([
                    RedevableService.getList(),
                    TerrainService.getList(),
                    TauxTaxTnbService.getList(),
                ]);
                setRedevables(redevablesResponse.data);
                setTerrains(terrainsResponse.data);
                setTauxTaxTnbs(tauxTaxTnbsResponse.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    const onDropdownChange = (e, field) => {
        setItem((prevState) => ({ ...prevState, [field]: e.value}));
    };


    const onTabChange = (e: { index: number }) => { setActiveIndex(e.index); };

    const hideDialog = () => {
        setSubmitted(false);
        onClose();
    };

    const saveItem = async () => {
        setSubmitted(true);
        let _items = [...items];
        let _item = {...item};
        if (!_item.id) {
            const response = await TaxTnbService.save(_item);
			_item.id = response.data.id;
            _items.push(_item);
            add(_item);
            MessageService.showToast(showToast, { severity: 'success', summary: 'Successful', detail: 'TaxTnb Created', life: 3000 });
        }
        setItems(_items);
        onClose();
        setItem(emptyItem);
    };

    const onInputTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, name: string) => {
        const val = (e.target && e.target.value) || '';
        let _item = {...item};
        _item[`${name}`] = val;
        setItem(_item);
    };

    const onInputDateChange = (e: CalendarChangeEvent, name: string) => {
        const val = e.value || '';
        let _item = { ...item};
        _item[`${name}`] = val;
        setItem(_item);
    };

    const onInputNumerChange = (e: InputNumberChangeEvent, name: string) => {
        const val = e.value === null ? null : +e.value;
        setItem((prevItem) => ({ ...prevItem, [name]: val, }));
    };

    const onMultiSelectChange = (e, field) => {
      if (e && e.value && Array.isArray(e.value)) {
         const selectedValues = e.value.map(option => option && option.value);
         setItem(prevState => ({ ...prevState, [field]: selectedValues, }));
      }
    };

    const onBooleanInputChange = (e: any, name: string) => {
       const val = e.value;
       setItem((prevItem) => ({ ...prevItem, [name]: val, }));
    };

    const itemDialogFooter = ( <>
        <Button label="Cancel" icon="pi pi-times" text onClick={hideDialog} />
        <Button label="Save" icon="pi pi-check" text onClick={saveItem} /> < />
    );

return(
    <Dialog visible={visible} style={{width: '70vw'}} header="TaxTnb" modal className="p-fluid" footer={itemDialogFooter} onHide={hideDialog} >
        <TabView activeIndex={activeIndex} onTabChange={onTabChange}>
            <TabPanel header="TaxTnb">
                <div className="formgrid grid">
                    <div className="field col-6">
                    <label htmlFor="annee">Annee</label>
                    <InputNumber id="annee" value={item.annee} onChange={(e) => onInputNumerChange(e, 'annee')} />
                    </div>
                    <div className="field col-6">
                    <label htmlFor="montantBase">MontantBase</label>
                    <InputNumber id="montantBase" value={item.montantBase} onChange={(e) => onInputNumerChange(e, 'montantBase')} />
                    </div>
                    <div className="field col-6">
                    <label htmlFor="mantantRetard">MantantRetard</label>
                    <InputNumber id="mantantRetard" value={item.mantantRetard} onChange={(e) => onInputNumerChange(e, 'mantantRetard')} />
                    </div>
                    <div className="field col-6">
                    <label htmlFor="nombreMoisRetard">NombreMoisRetard</label>
                    <InputNumber id="nombreMoisRetard" value={item.nombreMoisRetard} onChange={(e) => onInputNumerChange(e, 'nombreMoisRetard')} />
                    </div>
                    <div className="field col-6">
                    <label htmlFor="montantTotal">MontantTotal</label>
                    <InputNumber id="montantTotal" value={item.montantTotal} onChange={(e) => onInputNumerChange(e, 'montantTotal')} />
                    </div>
                    <div className="field col-6">
                    <label htmlFor="datePresentation">DatePresentation</label>
                    <Calendar id="datePresentation" value={item.datePresentation} onChange={(e) => onInputDateChange(e, 'datePresentation')} dateFormat="dd/mm/yy" showTime />
                    </div>
                    <div className="field col-6">
                    <label htmlFor="dateTaxeTnb">DateTaxeTnb</label>
                    <Calendar id="dateTaxeTnb" value={item.dateTaxeTnb} onChange={(e) => onInputDateChange(e, 'dateTaxeTnb')} dateFormat="dd/mm/yy" showTime />
                    </div>
                    <div className="field col-6">
                    <label htmlFor="redevable">Redevable</label>
                    <Dropdown  id="redevableDropdown"  value={item.redevable} options={redevables} onChange={(e) => onDropdownChange(e, 'redevable')}   placeholder="Sélectionnez un redevable" filter filterPlaceholder="Rechercher un redevable" optionLabel="cin" />
                    </div>
                    <div className="field col-6">
                    <label htmlFor="terrain">Terrain</label>
                    <Dropdown  id="terrainDropdown"  value={item.terrain} options={terrains} onChange={(e) => onDropdownChange(e, 'terrain')}   placeholder="Sélectionnez un terrain" filter filterPlaceholder="Rechercher un terrain" optionLabel="ref" />
                    </div>
                    <div className="field col-6">
                    <label htmlFor="tauxTaxTnb">TauxTaxTnb</label>
                    <Dropdown  id="tauxTaxTnbDropdown"  value={item.tauxTaxTnb} options={tauxTaxTnbs} onChange={(e) => onDropdownChange(e, 'tauxTaxTnb')}   placeholder="Sélectionnez un tauxTaxTnb" filter filterPlaceholder="Rechercher un tauxTaxTnb" optionLabel="id" />
                    </div>
                </div>
            </TabPanel>
        </TabView>
    </Dialog>
);
};
export default Create;
