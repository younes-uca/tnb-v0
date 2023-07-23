package  ma.sir.tnb.ws.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


import ma.sir.tnb.zynerator.util.StringUtil;
import ma.sir.tnb.zynerator.converter.AbstractConverter;
import ma.sir.tnb.zynerator.util.DateUtil;
import ma.sir.tnb.bean.history.TaxTnbHistory;
import ma.sir.tnb.bean.core.TaxTnb;
import ma.sir.tnb.ws.dto.TaxTnbDto;

@Component
public class TaxTnbConverter extends AbstractConverter<TaxTnb, TaxTnbDto, TaxTnbHistory> {

    @Autowired
    private TerrainConverter terrainConverter ;
    @Autowired
    private RedevableConverter redevableConverter ;
    @Autowired
    private TauxTaxTnbConverter tauxTaxTnbConverter ;
    private boolean redevable;
    private boolean terrain;
    private boolean tauxTaxTnb;

    public  TaxTnbConverter(){
        super(TaxTnb.class, TaxTnbDto.class, TaxTnbHistory.class);
    }

    @Override
    public TaxTnb toItem(TaxTnbDto dto) {
        if (dto == null) {
            return null;
        } else {
        TaxTnb item = new TaxTnb();
            if(StringUtil.isNotEmpty(dto.getId()))
                item.setId(dto.getId());
            if(StringUtil.isNotEmpty(dto.getAnnee()))
                item.setAnnee(dto.getAnnee());
            if(StringUtil.isNotEmpty(dto.getMontantBase()))
                item.setMontantBase(dto.getMontantBase());
            if(StringUtil.isNotEmpty(dto.getMantantRetard()))
                item.setMantantRetard(dto.getMantantRetard());
            if(StringUtil.isNotEmpty(dto.getNombreMoisRetard()))
                item.setNombreMoisRetard(dto.getNombreMoisRetard());
            if(StringUtil.isNotEmpty(dto.getMontantTotal()))
                item.setMontantTotal(dto.getMontantTotal());
            if(StringUtil.isNotEmpty(dto.getDatePresentation()))
                item.setDatePresentation(DateUtil.stringEnToDate(dto.getDatePresentation()));
            if(StringUtil.isNotEmpty(dto.getDateTaxeTnb()))
                item.setDateTaxeTnb(DateUtil.stringEnToDate(dto.getDateTaxeTnb()));
            if(this.redevable && dto.getRedevable()!=null &&  dto.getRedevable().getId() != null)
                item.setRedevable(redevableConverter.toItem(dto.getRedevable())) ;

            if(this.terrain && dto.getTerrain()!=null &&  dto.getTerrain().getId() != null)
                item.setTerrain(terrainConverter.toItem(dto.getTerrain())) ;

            if(this.tauxTaxTnb && dto.getTauxTaxTnb()!=null &&  dto.getTauxTaxTnb().getId() != null)
                item.setTauxTaxTnb(tauxTaxTnbConverter.toItem(dto.getTauxTaxTnb())) ;



        return item;
        }
    }

    @Override
    public TaxTnbDto toDto(TaxTnb item) {
        if (item == null) {
            return null;
        } else {
            TaxTnbDto dto = new TaxTnbDto();
            if(StringUtil.isNotEmpty(item.getId()))
                dto.setId(item.getId());
            if(StringUtil.isNotEmpty(item.getAnnee()))
                dto.setAnnee(item.getAnnee());
            if(StringUtil.isNotEmpty(item.getMontantBase()))
                dto.setMontantBase(item.getMontantBase());
            if(StringUtil.isNotEmpty(item.getMantantRetard()))
                dto.setMantantRetard(item.getMantantRetard());
            if(StringUtil.isNotEmpty(item.getNombreMoisRetard()))
                dto.setNombreMoisRetard(item.getNombreMoisRetard());
            if(StringUtil.isNotEmpty(item.getMontantTotal()))
                dto.setMontantTotal(item.getMontantTotal());
            if(item.getDatePresentation()!=null)
                dto.setDatePresentation(DateUtil.dateTimeToString(item.getDatePresentation()));
            if(item.getDateTaxeTnb()!=null)
                dto.setDateTaxeTnb(DateUtil.dateTimeToString(item.getDateTaxeTnb()));
        if(this.redevable && item.getRedevable()!=null) {
            dto.setRedevable(redevableConverter.toDto(item.getRedevable())) ;
        }
        if(this.terrain && item.getTerrain()!=null) {
            dto.setTerrain(terrainConverter.toDto(item.getTerrain())) ;
        }
        if(this.tauxTaxTnb && item.getTauxTaxTnb()!=null) {
            dto.setTauxTaxTnb(tauxTaxTnbConverter.toDto(item.getTauxTaxTnb())) ;
        }


        return dto;
        }
    }


    public void initObject(boolean value) {
        this.redevable = value;
        this.terrain = value;
        this.tauxTaxTnb = value;
    }


    public TerrainConverter getTerrainConverter(){
        return this.terrainConverter;
    }
    public void setTerrainConverter(TerrainConverter terrainConverter ){
        this.terrainConverter = terrainConverter;
    }
    public RedevableConverter getRedevableConverter(){
        return this.redevableConverter;
    }
    public void setRedevableConverter(RedevableConverter redevableConverter ){
        this.redevableConverter = redevableConverter;
    }
    public TauxTaxTnbConverter getTauxTaxTnbConverter(){
        return this.tauxTaxTnbConverter;
    }
    public void setTauxTaxTnbConverter(TauxTaxTnbConverter tauxTaxTnbConverter ){
        this.tauxTaxTnbConverter = tauxTaxTnbConverter;
    }
    public boolean  isRedevable(){
        return this.redevable;
    }
    public void  setRedevable(boolean redevable){
        this.redevable = redevable;
    }
    public boolean  isTerrain(){
        return this.terrain;
    }
    public void  setTerrain(boolean terrain){
        this.terrain = terrain;
    }
    public boolean  isTauxTaxTnb(){
        return this.tauxTaxTnb;
    }
    public void  setTauxTaxTnb(boolean tauxTaxTnb){
        this.tauxTaxTnb = tauxTaxTnb;
    }
}
