package  ma.sir.tnb.ws.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


import ma.sir.tnb.zynerator.util.StringUtil;
import ma.sir.tnb.zynerator.converter.AbstractConverter;
import ma.sir.tnb.zynerator.util.DateUtil;
import ma.sir.tnb.bean.history.RedevableHistory;
import ma.sir.tnb.bean.core.Redevable;
import ma.sir.tnb.ws.dto.RedevableDto;

@Component
public class RedevableConverter extends AbstractConverter<Redevable, RedevableDto, RedevableHistory> {


    public  RedevableConverter(){
        super(Redevable.class, RedevableDto.class, RedevableHistory.class);
    }

    @Override
    public Redevable toItem(RedevableDto dto) {
        if (dto == null) {
            return null;
        } else {
        Redevable item = new Redevable();
            if(StringUtil.isNotEmpty(dto.getId()))
                item.setId(dto.getId());
            if(StringUtil.isNotEmpty(dto.getNom()))
                item.setNom(dto.getNom());
            if(StringUtil.isNotEmpty(dto.getPrenom()))
                item.setPrenom(dto.getPrenom());
            if(StringUtil.isNotEmpty(dto.getCin()))
                item.setCin(dto.getCin());


        return item;
        }
    }

    @Override
    public RedevableDto toDto(Redevable item) {
        if (item == null) {
            return null;
        } else {
            RedevableDto dto = new RedevableDto();
            if(StringUtil.isNotEmpty(item.getId()))
                dto.setId(item.getId());
            if(StringUtil.isNotEmpty(item.getNom()))
                dto.setNom(item.getNom());
            if(StringUtil.isNotEmpty(item.getPrenom()))
                dto.setPrenom(item.getPrenom());
            if(StringUtil.isNotEmpty(item.getCin()))
                dto.setCin(item.getCin());


        return dto;
        }
    }


    public void initObject(boolean value) {
    }


}
