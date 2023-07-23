import {Button} from 'primereact/button';
import {Column} from 'primereact/column';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {DataTable} from 'primereact/datatable';
import {Dialog} from 'primereact/dialog';
import {FileUpload} from 'primereact/fileupload';
import {InputText} from 'primereact/inputtext';
import {Toast} from 'primereact/toast';
import {Toolbar} from 'primereact/toolbar';
import React, {useEffect, useRef, useState} from 'react';
import { Paginator } from 'primereact/paginator';
import {BaseCriteria} from '/pages/zynerator/criteria/BaseCriteria.model';
import {MessageService} from '/pages/controller/service/MessageService';
import {Card} from "primereact/card";
import {Calendar} from "primereact/calendar";
import {InputNumber} from "primereact/inputnumber";
import {Dropdown} from "primereact/dropdown";
import {AxiosResponse} from "axios";

import {TaxTnbService} from '/pages/controller/service/TaxTnb.service';
import {TaxTnbDto}  from '/pages/controller/model/TaxTnb.model';
import {TaxTnbCriteria} from "/pages/controller/criteria/TaxTnbCriteria.model";

import {TerrainDto} from '/pages/controller/model/Terrain.model';
import {TerrainService} from '/pages/controller/service/Terrain.service';
import {RedevableDto} from '/pages/controller/model/Redevable.model';
import {RedevableService} from '/pages/controller/service/Redevable.service';
import {TauxTaxTnbDto} from '/pages/controller/model/TauxTaxTnb.model';
import {TauxTaxTnbService} from '/pages/controller/service/TauxTaxTnb.service';

import Edit from '/pages/module/admin/view/tnb/tax-tnb-admin/edit-admin/tax-tnb-edit-admin.component';
import Create from '/pages/module/admin/view/tnb/tax-tnb-admin/create-admin/tax-tnb-create-admin.component';
import View from '/pages/module/admin/view/tnb/tax-tnb-admin/view-admin/tax-tnb-view-admin.component';

const List = () => {

    const emptyItem = new TaxTnbDto();
    const [items, setItems] = useState<TaxTnbDto[]>([]);
    const [deleteItemDialog, setDeleteItemDialog] = useState(false);
    const [deleteItemsDialog, setDeleteItemsDialog] = useState(false);
    const [item, setItem] = useState<TaxTnbDto>(emptyItem);
    const [selectedItems, setSelectedItems] = useState<TaxTnbDto[]>([]);
    const [globalFilter, setGlobalFilter] = useState('');
    const [showCreateDialog, setShowCreateDialog] = useState<boolean>(false);
    const [showEditDialog, setShowEditDialog] = useState<boolean>(false);
    const [showViewDialog, setShowViewDialog] = useState<boolean>(false);
    const [selectedItem, setSelectedItem] = useState<TaxTnbDto | null>(null);
    const [rows, setRows] = useState<number>(10);
    const [totalRecords, setTotalRecords] = useState(0);
    const [criteria, setCriteria] = useState(new TaxTnbCriteria());
    const [first, setFirst] = useState(0);
    const toast = useRef<Toast>();
    const dt = useRef<DataTable<TaxTnbDto[]>>();
    const [findByCriteriaShow, setFindByCriteriaShow] = useState(false);
    const [isSearchTriggered, setIsSearchTriggered] = useState(false);

    const [terrains, setTerrains] = useState<TerrainDto[]>([]);
    type TerrainResponse = AxiosResponse<TerrainDto[]>;
    const [redevables, setRedevables] = useState<RedevableDto[]>([]);
    type RedevableResponse = AxiosResponse<RedevableDto[]>;
    const [tauxTaxTnbs, setTauxTaxTnbs] = useState<TauxTaxTnbDto[]>([]);
    type TauxTaxTnbResponse = AxiosResponse<TauxTaxTnbDto[]>;

    const showSearch = () => { setFindByCriteriaShow(!findByCriteriaShow); };

    const handleValidateClick = () => {setIsSearchTriggered(true);};

    const handleCancelClick = () => {
        setCriteria(new TaxTnbCriteria());
        setIsSearchTriggered(true);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [redevablesResponse ,terrainsResponse ,tauxTaxTnbsResponse ] = await Promise.all<RedevableResponse,TerrainResponse,TauxTaxTnbResponse>([
                ]);
                setRedevables(redevablesResponse.data);
                setTerrains(terrainsResponse.data);
                setTauxTaxTnbs(tauxTaxTnbsResponse.data);
            } catch (error) {
                console.error(error);
            }
        };
        if (isSearchTriggered) {
            fetchItems(criteria);
            setIsSearchTriggered(false);
        }
        fetchData();
        fetchItems(criteria);
    }, [isSearchTriggered]);

    const fetchItems = async (criteria) => {
        try {
            const response = await TaxTnbService.findPaginatedByCriteria(criteria);
            const paginatedItems = response.data;
            setTotalRecords(paginatedItems.dataSize);
            setItems(paginatedItems.list);
        } catch (error) {
            console.log(error);
        }
    };

    const onPage = (event) => {
        const updatedCriteria = { ...criteria, page: event.page,maxResults: event.rows };
        setCriteria(updatedCriteria);
        setFirst(event.first);
        fetchItems(updatedCriteria);
    };

    const showCreateModal = (): void => {
        setShowCreateDialog(true);
    };

    const showEditModal = (item: TaxTnbDto) => {
        setSelectedItem(item);
        setShowEditDialog(true);
    };

    const showViewModal = (item: TaxTnbDto) => {
        setSelectedItem(item);
        setShowViewDialog(true);
    };

    const add = (item) => {
        setItems([...items, item]);
    };

    const update = (updatedItem: TaxTnbDto) => {
        const updatedList = items.map((item) => {
            if (item.id === updatedItem.id) { return updatedItem; }
            return item;
        });
        setItems(updatedList);
    };

   const hideDeleteItemDialog = () => {
        setDeleteItemDialog(false);
   };

   const hideDeleteItemsDialog = () => {
        setDeleteItemsDialog(false);
   };

    const confirmDeleteItem = (item: TaxTnbDto) => {
        setSelectedItem(item);
        setDeleteItemDialog(true);
    };

    const deleteItem = async () => {
        try{
            await TaxTnbService.delete(selectedItem?.id);
            setDeleteItemDialog(false);
            setItem(emptyItem);
            let _items = items.filter((val) => val.id !== selectedItem?.id);
            setItems(_items);
            MessageService.showToast(toast, { severity: 'success', summary: 'Successful', detail: 'TaxTnb Deleted', life: 3000 });
        } catch (error) {
            console.log(error);
        }
    };

    const exportCSV = () => {
        dt.current?.exportCSV();
    };

    const confirmDeleteSelected = () => {
        setDeleteItemsDialog(true);
    };

    const deleteSelectedItems = async () => {
        await TaxTnbService.deleteList(selectedItems);
        let _items = items.filter((val) => !selectedItems.includes(val));
        setItems(_items);
        setDeleteItemsDialog(false);
        setSelectedItems(null);
        MessageService.showToast(toast, { severity: 'success', summary: 'Successful', detail: 'TaxTnbs Deleted', life: 3000 });
    };

   const leftToolbarTemplate = () => {
       return (
           <React.Fragment>
               <div className="my-2">
                   <Button label="New" icon="pi pi-plus" severity="success" className=" mr-2" onClick={ showCreateModal} />
                   <Button label="Delete" icon="pi pi-trash" severity="danger" className=" mr-2" onClick={confirmDeleteSelected} disabled={!selectedItems || !selectedItems.length} />
                   <Button label="Search" icon={`pi pi-${findByCriteriaShow ? 'angle-down' : 'angle-right'}`} className=" mr-2" severity="warning" onClick={showSearch} />
               </div>
           </React.Fragment>
       );
   };

   const rightToolbarTemplate = () => {
       return (
           <React.Fragment>
               <FileUpload mode="basic" accept="image/*" maxFileSize={1000000} chooseLabel="Import" className="mr-2 inline-block" />
               <Button label="Export" icon="pi pi-upload" severity="help" onClick={exportCSV} />
           </React.Fragment>
       );
   };

    const actionBodyTemplate = (rowData: TaxTnbDto) => {
       return ( <>
           <Button icon="pi pi-pencil" rounded severity="success" className="mr-1" onClick={() => showEditModal(rowData)} />
           <Button icon="pi pi-trash" rounded  severity="danger" className="mr-1"  onClick={() => confirmDeleteItem(rowData)} />
           <Button icon="pi pi-eye" rounded severity="info" className="mr-1" onClick={() => showViewModal(rowData)} /> < />
       );
    };

    const header = (
        <div className="flex flex-column md:flex-row md:justify-content-between md:align-items-center">
        <h5 className="m-0">Manage tax tnbs</h5>
        <span className="block mt-2 md:mt-0 p-input-icon-left"><i className="pi pi-search" />
        <InputText type="search" onInput={(e) => setGlobalFilter(e.currentTarget.value)} placeholder="Search..." /> </span>
        </div>
    );

    const deleteItemDialogFooter = ( <>
        <Button label="No" icon="pi pi-times" text onClick={hideDeleteItemDialog} />
        <Button label="Yes" icon="pi pi-check" text onClick={deleteItem} /> < />
    );

    const deleteItemsDialogFooter = ( <>
        <Button label="No" icon="pi pi-times" text onClick={hideDeleteItemsDialog} />
        <Button label="Yes" icon="pi pi-check" text onClick={deleteSelectedItems} /> < />
    );

return (
    <div className="grid crud-demo">
        <div className="col-12">
            <div className="card">
                <Toast ref={toast} />
                <Toolbar className="mb-4" left={leftToolbarTemplate} right={rightToolbarTemplate}></Toolbar>
                {findByCriteriaShow && (
                <Card>
                    <div className="search-container">
                        <div className="grid">
                                        <span className="p-float-label mr-3 align-search-items mt-4">
                                        <InputNumber id="1-1" value={criteria.anneeMin} onChange={(e) => setCriteria({ ...criteria, anneeMin: e.value })} mode="decimal" />
                                        <label htmlFor="1-1">Annee Min</label>
                                        </span>
                                        <span className="p-float-label mr-3 align-search-items mt-4">
                                        <InputNumber id="1-2" value={criteria.anneeMax} onChange={(e) => setCriteria({ ...criteria, anneeMax: e.value })} mode="decimal" />
                                        <label htmlFor="1-2">Annee Max</label>
                                        </span>
                                        <span className="p-float-label mr-3 align-search-items mt-4">
                                        <InputNumber id="2-1" value={criteria.montantBaseMin} onChange={(e) => setCriteria({ ...criteria, montantBaseMin: e.value })} mode="decimal" />
                                        <label htmlFor="2-1">MontantBase Min</label>
                                        </span>
                                        <span className="p-float-label mr-3 align-search-items mt-4">
                                        <InputNumber id="2-2" value={criteria.montantBaseMax} onChange={(e) => setCriteria({ ...criteria, montantBaseMax: e.value })} mode="decimal" />
                                        <label htmlFor="2-2">MontantBase Max</label>
                                        </span>
                                        <span className="p-float-label mr-3 align-search-items mt-4">
                                        <InputNumber id="3-1" value={criteria.mantantRetardMin} onChange={(e) => setCriteria({ ...criteria, mantantRetardMin: e.value })} mode="decimal" />
                                        <label htmlFor="3-1">MantantRetard Min</label>
                                        </span>
                                        <span className="p-float-label mr-3 align-search-items mt-4">
                                        <InputNumber id="3-2" value={criteria.mantantRetardMax} onChange={(e) => setCriteria({ ...criteria, mantantRetardMax: e.value })} mode="decimal" />
                                        <label htmlFor="3-2">MantantRetard Max</label>
                                        </span>
                                        <span className="p-float-label mr-3 align-search-items mt-4">
                                        <InputNumber id="4-1" value={criteria.nombreMoisRetardMin} onChange={(e) => setCriteria({ ...criteria, nombreMoisRetardMin: e.value })} mode="decimal" />
                                        <label htmlFor="4-1">NombreMoisRetard Min</label>
                                        </span>
                                        <span className="p-float-label mr-3 align-search-items mt-4">
                                        <InputNumber id="4-2" value={criteria.nombreMoisRetardMax} onChange={(e) => setCriteria({ ...criteria, nombreMoisRetardMax: e.value })} mode="decimal" />
                                        <label htmlFor="4-2">NombreMoisRetard Max</label>
                                        </span>
                                        <span className="p-float-label mr-3 align-search-items mt-4">
                                        <InputNumber id="5-1" value={criteria.montantTotalMin} onChange={(e) => setCriteria({ ...criteria, montantTotalMin: e.value })} mode="decimal" />
                                        <label htmlFor="5-1">MontantTotal Min</label>
                                        </span>
                                        <span className="p-float-label mr-3 align-search-items mt-4">
                                        <InputNumber id="5-2" value={criteria.montantTotalMax} onChange={(e) => setCriteria({ ...criteria, montantTotalMax: e.value })} mode="decimal" />
                                        <label htmlFor="5-2">MontantTotal Max</label>
                                        </span>
                                        <span className="p-float-label mr-3 align-search-items mt-4">
                                        <Calendar id="6-1" value={criteria.datePresentationFrom} onChange={(e) => setCriteria({ ...criteria, datePresentationFrom: e.value as Date })} dateFormat="dd-MM-yy" />
                                        <label htmlFor="6-1">DatePresentation Min</label>
                                        </span>
                                        <span className="p-float-label mr-3 align-search-items mt-4">
                                        <Calendar id="6-2" value={criteria.datePresentationTo} onChange={(e) => setCriteria({ ...criteria, datePresentationTo: e.value as Date })} dateFormat="dd-MM-yy" />
                                        <label htmlFor="6-2">DatePresentation Max</label>
                                        </span>
                                        <span className="p-float-label mr-3 align-search-items mt-4">
                                        <Calendar id="7-1" value={criteria.dateTaxeTnbFrom} onChange={(e) => setCriteria({ ...criteria, dateTaxeTnbFrom: e.value as Date })} dateFormat="dd-MM-yy" />
                                        <label htmlFor="7-1">DateTaxeTnb Min</label>
                                        </span>
                                        <span className="p-float-label mr-3 align-search-items mt-4">
                                        <Calendar id="7-2" value={criteria.dateTaxeTnbTo} onChange={(e) => setCriteria({ ...criteria, dateTaxeTnbTo: e.value as Date })} dateFormat="dd-MM-yy" />
                                        <label htmlFor="7-2">DateTaxeTnb Max</label>
                                        </span>
                                        <span className="p-float-label mr-3 align-search-items mt-4">
                                        <Dropdown id="8" value={criteria.redevable} options={redevables} onChange={(e) => setCriteria({ ...criteria, redevable: e.target.value })} optionLabel="cin" filter showClear placeholder="Redevable" />
                                        </span>
                                        <span className="p-float-label mr-3 align-search-items mt-4">
                                        <Dropdown id="9" value={criteria.terrain} options={terrains} onChange={(e) => setCriteria({ ...criteria, terrain: e.target.value })} optionLabel="ref" filter showClear placeholder="Terrain" />
                                        </span>
                                        <span className="p-float-label mr-3 align-search-items mt-4">
                                        <Dropdown id="10" value={criteria.tauxTaxTnb} options={tauxTaxTnbs} onChange={(e) => setCriteria({ ...criteria, tauxTaxTnb: e.target.value })} optionLabel="id" filter showClear placeholder="TauxTaxTnb" />
                                        </span>
                        </div>
                        <div style={{ marginTop : '1rem', display: 'flex', justifyContent: 'flex-end' }} >
                            <Button label="Validate" icon="pi pi-sort-amount-down" className="p-button-info mr-2" onClick={handleValidateClick} />
                            <Button label="Cancel" className="p-button-secondary mr-2"  icon="pi pi-times" onClick={handleCancelClick} />
                    </div>
                        </div>
                </Card>
                )}
                <DataTable ref={dt} value={items} selection={selectedItems} onSelectionChange={(e) => setSelectedItems(e.value as TaxTnbDto[])} dataKey="id" className="datatable-responsive" globalFilter={globalFilter} header={header} responsiveLayout="scroll" >
                    <Column selectionMode="multiple" headerStyle={{ width: '4rem' }}> </Column>
                    
                    <Column field="annee" header="Annee" sortable></Column>
                    
                    
                    <Column field="montantBase" header="MontantBase" sortable></Column>
                    
                    
                    <Column field="mantantRetard" header="MantantRetard" sortable></Column>
                    
                    
                    <Column field="nombreMoisRetard" header="NombreMoisRetard" sortable></Column>
                    
                    
                    <Column field="montantTotal" header="MontantTotal" sortable></Column>
                    
                    
                    <Column field="datePresentation" header="DatePresentation" sortable></Column>
                    
                    
                    <Column field="dateTaxeTnb" header="DateTaxeTnb" sortable></Column>
                    
                    
                    <Column field="redevable.cin" header="Redevable" sortable></Column>
                    
                    
                    <Column field="terrain.ref" header="Terrain" sortable></Column>
                    
                     <!-- 
                    <Column field="tauxTaxTnb.id" header="TauxTaxTnb" sortable></Column>
                     --> 
                    <Column header="Actions" body={actionBodyTemplate}></Column>
                </DataTable>
                <div className="p-d-flex p-ai-center p-jc-between">
                    <Paginator onPageChange={onPage} first={first} rows={rows} totalRecords={totalRecords} />
                </div>
                <Create visible={showCreateDialog} onClose={() => setShowCreateDialog(false)} add={add} showToast={toast} list={items} />
                <Edit  visible={showEditDialog} onClose={() =>  { setShowEditDialog(false); setSelectedItem(null); }} showToast={toast} selectedItem={selectedItem} update={update} />
                <View visible={showViewDialog} onClose={() =>  { setShowViewDialog(false); setSelectedItem(null); }} selectedItem={selectedItem} />
                <Dialog visible={deleteItemDialog} style={{width: '450px'}} header="Confirm" modal footer={deleteItemDialogFooter} onHide={hideDeleteItemDialog}>
                    <div className="flex align-items-center justify-content-center">
                    <i className="pi pi-exclamation-triangle mr-3" style={{fontSize: '2rem'}}/>
                    {item && (<span>Are you sure you want to delete tax tnb <b>{item.id}</b>?</span>)}
                    </div>
                </Dialog>
                <Dialog visible={deleteItemsDialog} style={{width: '450px'}} header="Confirm" modal footer={deleteItemsDialogFooter} onHide={hideDeleteItemsDialog} >
                    <div className="flex align-items-center justify-content-center">
                    <i className="pi pi-exclamation-triangle mr-3" style={{fontSize: '2rem'}} />
                    {item && <span>Are you sure you want to delete the selected tax tnbs?</span>}
                    </div>
                </Dialog>
            </div>
        </div>
    </div>
);
};
export default List;

