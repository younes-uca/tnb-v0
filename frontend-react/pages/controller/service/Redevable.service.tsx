import axios, { AxiosResponse } from "axios";
import { API_URL } from '/layout/AppConfig';
import {BaseCriteria} from "/pages/zynerator/criteria/BaseCriteria.model";
import {PaginatedList} from "/pages/zynerator/dto/PaginatedList.model";
import {BaseDto} from "/pages/zynerator/dto/BaseDto.model";
import {RedevableDto} from '/pages/controller/model/Redevable.model';
import {RedevableCriteria} from "/pages/controller/criteria/RedevableCriteria.model";



export const RedevableService = {

   getList(): Promise<AxiosResponse<RedevableDto[]>> {
     return axios.get(API_URL + 'redevable/');
   },

   save(item: RedevableDto): Promise<AxiosResponse<RedevableDto>> {
     return axios.post(API_URL + 'redevable/', item);
   },

   update(item: RedevableDto): Promise<AxiosResponse<RedevableDto>> {
      return axios.put(API_URL + 'redevable/', item);
   },

   delete(id: number): Promise<AxiosResponse<RedevableDto>> {
      return axios.delete(API_URL + 'redevable/id/'+ id);
   },

   deleteList(items: RedevableDto[]): Promise<AxiosResponse<string>> {
      return axios.post(API_URL + 'redevable/multiple', items);
   },

   findPaginatedByCriteria(criteria:RedevableCriteria):Promise<AxiosResponse<PaginatedList<RedevableDto>>> {
     return axios.post<PaginatedList<RedevableDto>>(API_URL + 'redevable/find-paginated-by-criteria', criteria);
   }
};

