package  ma.sir.tnb.ws.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


import ma.sir.tnb.zynerator.util.StringUtil;
import ma.sir.tnb.zynerator.converter.AbstractConverter;
import ma.sir.tnb.zynerator.util.DateUtil;
import ma.sir.tnb.bean.history.CategorieTerrainHistory;
import ma.sir.tnb.bean.core.CategorieTerrain;
import ma.sir.tnb.ws.dto.CategorieTerrainDto;

@Component
public class CategorieTerrainConverter extends AbstractConverter<CategorieTerrain, CategorieTerrainDto, CategorieTerrainHistory> {


    public  CategorieTerrainConverter(){
        super(CategorieTerrain.class, CategorieTerrainDto.class, CategorieTerrainHistory.class);
    }

    @Override
    public CategorieTerrain toItem(CategorieTerrainDto dto) {
        if (dto == null) {
            return null;
        } else {
        CategorieTerrain item = new CategorieTerrain();
            if(StringUtil.isNotEmpty(dto.getId()))
                item.setId(dto.getId());
            if(StringUtil.isNotEmpty(dto.getCode()))
                item.setCode(dto.getCode());
            if(StringUtil.isNotEmpty(dto.getLibelle()))
                item.setLibelle(dto.getLibelle());


        return item;
        }
    }

    @Override
    public CategorieTerrainDto toDto(CategorieTerrain item) {
        if (item == null) {
            return null;
        } else {
            CategorieTerrainDto dto = new CategorieTerrainDto();
            if(StringUtil.isNotEmpty(item.getId()))
                dto.setId(item.getId());
            if(StringUtil.isNotEmpty(item.getCode()))
                dto.setCode(item.getCode());
            if(StringUtil.isNotEmpty(item.getLibelle()))
                dto.setLibelle(item.getLibelle());


        return dto;
        }
    }


    public void initObject(boolean value) {
    }


}
