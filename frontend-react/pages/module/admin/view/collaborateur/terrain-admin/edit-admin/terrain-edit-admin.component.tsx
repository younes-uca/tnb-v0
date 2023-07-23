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
import {MultiSelect} from "primereact/multiselect";import {MessageService} from "/pages/controller/service/MessageService";

import {TerrainService} from '/pages/controller/service/Terrain.service';
import  {TerrainDto}  from '/pages/controller/model/Terrain.model';

import {CategorieTerrainDto} from '/pages/controller/model/CategorieTerrain.model';
import {CategorieTerrainService} from '/pages/controller/service/CategorieTerrain.service';
import {RedevableDto} from '/pages/controller/model/Redevable.model';
import {RedevableService} from '/pages/controller/service/Redevable.service';
const Edit = ({visible, onClose, showToast, selectedItem, update}) => {

    const emptyItem = new TerrainDto();
    const [submitted, setSubmitted] = useState(false);
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [activeTab, setActiveTab] = useState(0);
    const [item, setItem] = useState<TerrainDto>( emptyItem);
    const [redevables, setRedevables] = useState<RedevableDto[]>([]);
    const [categorieTerrains, setCategorieTerrains] = useState<CategorieTerrainDto[]>([]);

    type CategorieTerrainResponse = AxiosResponse<CategorieTerrainDto[]>;
    type RedevableResponse = AxiosResponse<RedevableDto[]>;


    useEffect(() => {
        const fetchData = async () => {
            try {
                const [redevablesResponse ,categorieTerrainsResponse ] = await Promise.all<RedevableResponse,CategorieTerrainResponse>([
                    RedevableService.getList(),
                    CategorieTerrainService.getList(),
                ]);
                setRedevables(redevablesResponse.data);
                setCategorieTerrains(categorieTerrainsResponse.data);
            } catch (error) {
                console.error(error);
            }
        };
    fetchData();
    setItem(selectedItem ? { ...selectedItem } : { ...emptyItem });
    }, [selectedItem]);



    const onDropdownChange = (e, field) => {
        setItem((prevState) => ({ ...prevState, [field]: e.value, }));
    };


    const onTabChange = (e: { index: number }) => {
        setActiveIndex(e.index);
    };

    const hideDialog = () => {
        setSubmitted(false);
        onClose();
    };

    const saveItem = async () => {
        setSubmitted(true);
        let _item = {...item};
        try {
            if (_item.id) {
                await TerrainService.update(_item).then((response) => {
                    console.log(response.data);
                    update(response.data);
                    onClose();
                });
                MessageService.showToast(showToast, { severity: 'success', summary: 'Successful', detail: 'Terrain Updated', life: 3000 });
            }
        } catch (error) {
            console.log(error);
            MessageService.showToast(showToast, { severity: 'Error', summary: 'Error', detail: 'Failed to save terrain', life: 3000 });
        }
    };

    const onInputTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, name: string) => {
        const val = (e.target && e.target.value) || '';
        let _item = {...item};
        _item[`${name}`] = val;
        setItem(_item);
    };

    const onInputDateChange = (e: CalendarChangeEvent, name: string) => {
        const val = e.value || ''; // Utilisez e.value au lieu de e.target.value
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
    <Dialog visible={visible} style={{width: '70vw'}} header="Terrain" modal className="p-fluid" footer={itemDialogFooter} onHide={hideDialog}>
        <TabView activeIndex={activeIndex} onTabChange={onTabChange}>
            <TabPanel header="Terrain">
                <div className="formgrid grid">
                    <div className="field col-6">
                        <label htmlFor="ref">Ref</label>
                        <InputText id="ref" value={item ? item.ref : ''} onChange={(e) => onInputTextChange(e, 'ref')} required autoFocus className={classNames({'p-invalid': submitted && !item.ref})} />
                        {submitted && !item.ref && <small className="p-invalid">Ref is required.</small>}
                    </div>
                    <div className="field col-6">
                        <label htmlFor="categorieTerrain">CategorieTerrain</label>
                        <Dropdown  id="categorieTerrainDropdown"  value={item ? item.categorieTerrain : ''} options={categorieTerrains} onChange={(e) => onDropdownChange(e, 'categorieTerrain')}   placeholder="Sélectionnez un categorieTerrain" filter filterPlaceholder="Rechercher un categorieTerrain" optionLabel="libelle" />
                    </div>
                    <div className="field col-6">
                        <label htmlFor="redevable">Redevable</label>
                        <Dropdown  id="redevableDropdown"  value={item ? item.redevable : ''} options={redevables} onChange={(e) => onDropdownChange(e, 'redevable')}   placeholder="Sélectionnez un redevable" filter filterPlaceholder="Rechercher un redevable" optionLabel="cin" />
                    </div>
                </div>
            < /TabPanel>
        </TabView>
    </Dialog>
);
};
export default Edit;


