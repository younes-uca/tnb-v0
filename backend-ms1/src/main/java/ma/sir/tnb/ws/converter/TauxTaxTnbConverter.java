package  ma.sir.tnb.ws.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


import ma.sir.tnb.zynerator.util.StringUtil;
import ma.sir.tnb.zynerator.converter.AbstractConverter;
import ma.sir.tnb.zynerator.util.DateUtil;
import ma.sir.tnb.bean.history.TauxTaxTnbHistory;
import ma.sir.tnb.bean.core.TauxTaxTnb;
import ma.sir.tnb.ws.dto.TauxTaxTnbDto;

@Component
public class TauxTaxTnbConverter extends AbstractConverter<TauxTaxTnb, TauxTaxTnbDto, TauxTaxTnbHistory> {

    @Autowired
    private CategorieTerrainConverter categorieTerrainConverter ;
    private boolean categorieTerrain;

    public  TauxTaxTnbConverter(){
        super(TauxTaxTnb.class, TauxTaxTnbDto.class, TauxTaxTnbHistory.class);
    }

    @Override
    public TauxTaxTnb toItem(TauxTaxTnbDto dto) {
        if (dto == null) {
            return null;
        } else {
        TauxTaxTnb item = new TauxTaxTnb();
            if(StringUtil.isNotEmpty(dto.getId()))
                item.setId(dto.getId());
            if(StringUtil.isNotEmpty(dto.getPrixMetreCarre()))
                item.setPrixMetreCarre(dto.getPrixMetreCarre());
            if(StringUtil.isNotEmpty(dto.getPrixRetardMetreCarre()))
                item.setPrixRetardMetreCarre(dto.getPrixRetardMetreCarre());
            if(this.categorieTerrain && dto.getCategorieTerrain()!=null &&  dto.getCategorieTerrain().getId() != null)
                item.setCategorieTerrain(categorieTerrainConverter.toItem(dto.getCategorieTerrain())) ;



        return item;
        }
    }

    @Override
    public TauxTaxTnbDto toDto(TauxTaxTnb item) {
        if (item == null) {
            return null;
        } else {
            TauxTaxTnbDto dto = new TauxTaxTnbDto();
            if(StringUtil.isNotEmpty(item.getId()))
                dto.setId(item.getId());
            if(StringUtil.isNotEmpty(item.getPrixMetreCarre()))
                dto.setPrixMetreCarre(item.getPrixMetreCarre());
            if(StringUtil.isNotEmpty(item.getPrixRetardMetreCarre()))
                dto.setPrixRetardMetreCarre(item.getPrixRetardMetreCarre());
        if(this.categorieTerrain && item.getCategorieTerrain()!=null) {
            dto.setCategorieTerrain(categorieTerrainConverter.toDto(item.getCategorieTerrain())) ;
        }


        return dto;
        }
    }


    public void initObject(boolean value) {
        this.categorieTerrain = value;
    }


    public CategorieTerrainConverter getCategorieTerrainConverter(){
        return this.categorieTerrainConverter;
    }
    public void setCategorieTerrainConverter(CategorieTerrainConverter categorieTerrainConverter ){
        this.categorieTerrainConverter = categorieTerrainConverter;
    }
    public boolean  isCategorieTerrain(){
        return this.categorieTerrain;
    }
    public void  setCategorieTerrain(boolean categorieTerrain){
        this.categorieTerrain = categorieTerrain;
    }
}
