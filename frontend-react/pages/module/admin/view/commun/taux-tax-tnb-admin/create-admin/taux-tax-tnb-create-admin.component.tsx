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
import {TauxTaxTnbService} from '/pages/controller/service/TauxTaxTnb.service';
import  {TauxTaxTnbDto}  from '/pages/controller/model/TauxTaxTnb.model';
import {CategorieTerrainDto} from '/pages/controller/model/CategorieTerrain.model';
import {CategorieTerrainService} from '/pages/controller/service/CategorieTerrain.service';
const Create = ({visible, onClose, add, showToast, list}) => {

    const emptyItem = new TauxTaxTnbDto();
    const [items, setItems] = useState<TauxTaxTnbDto[]>([list]);
    const [item, setItem] = useState<TauxTaxTnbDto>(emptyItem);
    const [submitted, setSubmitted] = useState(false);
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [activeTab, setActiveTab] = useState(0);

    const [categorieTerrains, setCategorieTerrains] = useState<CategorieTerrainDto[]>([]);

    type CategorieTerrainResponse = AxiosResponse<CategorieTerrainDto[]>;


    useEffect(() => {
        const fetchData = async () => {
            try {
                const [categorieTerrainsResponse ] = await Promise.all<CategorieTerrainResponse>([
                    CategorieTerrainService.getList(),
                ]);
                setCategorieTerrains(categorieTerrainsResponse.data);
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
            const response = await TauxTaxTnbService.save(_item);
			_item.id = response.data.id;
            _items.push(_item);
            add(_item);
            MessageService.showToast(showToast, { severity: 'success', summary: 'Successful', detail: 'TauxTaxTnb Created', life: 3000 });
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
    <Dialog visible={visible} style={{width: '70vw'}} header="TauxTaxTnb" modal className="p-fluid" footer={itemDialogFooter} onHide={hideDialog} >
        <TabView activeIndex={activeIndex} onTabChange={onTabChange}>
            <TabPanel header="TauxTaxTnb">
                <div className="formgrid grid">
                    <div className="field col-6">
                    <label htmlFor="prixMetreCarre">PrixMetreCarre</label>
                    <InputNumber id="prixMetreCarre" value={item.prixMetreCarre} onChange={(e) => onInputNumerChange(e, 'prixMetreCarre')} />
                    </div>
                    <div className="field col-6">
                    <label htmlFor="prixRetardMetreCarre">PrixRetardMetreCarre</label>
                    <InputNumber id="prixRetardMetreCarre" value={item.prixRetardMetreCarre} onChange={(e) => onInputNumerChange(e, 'prixRetardMetreCarre')} />
                    </div>
                    <div className="field col-6">
                    <label htmlFor="categorieTerrain">CategorieTerrain</label>
                    <Dropdown  id="categorieTerrainDropdown"  value={item.categorieTerrain} options={categorieTerrains} onChange={(e) => onDropdownChange(e, 'categorieTerrain')}   placeholder="Sélectionnez un categorieTerrain" filter filterPlaceholder="Rechercher un categorieTerrain" optionLabel="libelle" />
                    </div>
                </div>
            </TabPanel>
        </TabView>
    </Dialog>
);
};
export default Create;
