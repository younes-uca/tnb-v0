import axios, { AxiosResponse } from "axios";
import { API_URL } from '/layout/AppConfig';
import {BaseCriteria} from "/pages/zynerator/criteria/BaseCriteria.model";
import {PaginatedList} from "/pages/zynerator/dto/PaginatedList.model";
import {BaseDto} from "/pages/zynerator/dto/BaseDto.model";
import {TauxTaxTnbDto} from '/pages/controller/model/TauxTaxTnb.model';
import {TauxTaxTnbCriteria} from "/pages/controller/criteria/TauxTaxTnbCriteria.model";



export const TauxTaxTnbService = {

   getList(): Promise<AxiosResponse<TauxTaxTnbDto[]>> {
     return axios.get(API_URL + 'tauxTaxTnb/');
   },

   save(item: TauxTaxTnbDto): Promise<AxiosResponse<TauxTaxTnbDto>> {
     return axios.post(API_URL + 'tauxTaxTnb/', item);
   },

   update(item: TauxTaxTnbDto): Promise<AxiosResponse<TauxTaxTnbDto>> {
      return axios.put(API_URL + 'tauxTaxTnb/', item);
   },

   delete(id: number): Promise<AxiosResponse<TauxTaxTnbDto>> {
      return axios.delete(API_URL + 'tauxTaxTnb/id/'+ id);
   },

   deleteList(items: TauxTaxTnbDto[]): Promise<AxiosResponse<string>> {
      return axios.post(API_URL + 'tauxTaxTnb/multiple', items);
   },

   findPaginatedByCriteria(criteria:TauxTaxTnbCriteria):Promise<AxiosResponse<PaginatedList<TauxTaxTnbDto>>> {
     return axios.post<PaginatedList<TauxTaxTnbDto>>(API_URL + 'tauxTaxTnb/find-paginated-by-criteria', criteria);
   }
};

