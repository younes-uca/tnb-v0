import axios, { AxiosResponse } from "axios";
import { API_URL } from '/layout/AppConfig';
import {BaseCriteria} from "/pages/zynerator/criteria/BaseCriteria.model";
import {PaginatedList} from "/pages/zynerator/dto/PaginatedList.model";
import {BaseDto} from "/pages/zynerator/dto/BaseDto.model";
import {TaxTnbDto} from '/pages/controller/model/TaxTnb.model';
import {TaxTnbCriteria} from "/pages/controller/criteria/TaxTnbCriteria.model";



export const TaxTnbService = {

   getList(): Promise<AxiosResponse<TaxTnbDto[]>> {
     return axios.get(API_URL + 'taxTnb/');
   },

   save(item: TaxTnbDto): Promise<AxiosResponse<TaxTnbDto>> {
     return axios.post(API_URL + 'taxTnb/', item);
   },

   update(item: TaxTnbDto): Promise<AxiosResponse<TaxTnbDto>> {
      return axios.put(API_URL + 'taxTnb/', item);
   },

   delete(id: number): Promise<AxiosResponse<TaxTnbDto>> {
      return axios.delete(API_URL + 'taxTnb/id/'+ id);
   },

   deleteList(items: TaxTnbDto[]): Promise<AxiosResponse<string>> {
      return axios.post(API_URL + 'taxTnb/multiple', items);
   },

   findPaginatedByCriteria(criteria:TaxTnbCriteria):Promise<AxiosResponse<PaginatedList<TaxTnbDto>>> {
     return axios.post<PaginatedList<TaxTnbDto>>(API_URL + 'taxTnb/find-paginated-by-criteria', criteria);
   }
};

