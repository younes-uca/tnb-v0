import axios, { AxiosResponse } from "axios";
import { API_URL } from '/layout/AppConfig';
import {BaseCriteria} from "/pages/zynerator/criteria/BaseCriteria.model";
import {PaginatedList} from "/pages/zynerator/dto/PaginatedList.model";
import {BaseDto} from "/pages/zynerator/dto/BaseDto.model";
import {TerrainDto} from '/pages/controller/model/Terrain.model';
import {TerrainCriteria} from "/pages/controller/criteria/TerrainCriteria.model";



export const TerrainService = {

   getList(): Promise<AxiosResponse<TerrainDto[]>> {
     return axios.get(API_URL + 'terrain/');
   },

   save(item: TerrainDto): Promise<AxiosResponse<TerrainDto>> {
     return axios.post(API_URL + 'terrain/', item);
   },

   update(item: TerrainDto): Promise<AxiosResponse<TerrainDto>> {
      return axios.put(API_URL + 'terrain/', item);
   },

   delete(id: number): Promise<AxiosResponse<TerrainDto>> {
      return axios.delete(API_URL + 'terrain/id/'+ id);
   },

   deleteList(items: TerrainDto[]): Promise<AxiosResponse<string>> {
      return axios.post(API_URL + 'terrain/multiple', items);
   },

   findPaginatedByCriteria(criteria:TerrainCriteria):Promise<AxiosResponse<PaginatedList<TerrainDto>>> {
     return axios.post<PaginatedList<TerrainDto>>(API_URL + 'terrain/find-paginated-by-criteria', criteria);
   }
};

