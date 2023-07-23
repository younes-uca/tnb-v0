package ma.sir.tnb.bean.core;

import java.util.Objects;

import java.time.LocalDateTime;


import java.util.Date;
import com.fasterxml.jackson.annotation.JsonFormat;



import com.fasterxml.jackson.annotation.JsonInclude;
import ma.sir.tnb.zynerator.audit.AuditBusinessObject;
import javax.persistence.*;
import java.util.Objects;


import java.math.BigDecimal;


@Entity
@Table(name = "tax_tnb")
@JsonInclude(JsonInclude.Include.NON_NULL)
@SequenceGenerator(name="tax_tnb_seq",sequenceName="tax_tnb_seq",allocationSize=1, initialValue = 1)
public class TaxTnb   extends AuditBusinessObject     {

    private Long id;

    private Integer annee = 0;
    private BigDecimal montantBase = BigDecimal.ZERO;
    private BigDecimal mantantRetard = BigDecimal.ZERO;
    private BigDecimal nombreMoisRetard = BigDecimal.ZERO;
    private BigDecimal montantTotal = BigDecimal.ZERO;
    private LocalDateTime datePresentation ;
    private LocalDateTime dateTaxeTnb ;

    private Redevable redevable ;
    
    private Terrain terrain ;
    
    private TauxTaxTnb tauxTaxTnb ;
    


    public TaxTnb(){
        super();
    }





    @Id
    @Column(name = "id")
        @GeneratedValue(strategy = GenerationType.SEQUENCE,generator="tax_tnb_seq")
    public Long getId(){
        return this.id;
    }
    public void setId(Long id){
        this.id = id;
    }
    public Integer getAnnee(){
        return this.annee;
    }
    public void setAnnee(Integer annee){
        this.annee = annee;
    }
    public BigDecimal getMontantBase(){
        return this.montantBase;
    }
    public void setMontantBase(BigDecimal montantBase){
        this.montantBase = montantBase;
    }
    public BigDecimal getMantantRetard(){
        return this.mantantRetard;
    }
    public void setMantantRetard(BigDecimal mantantRetard){
        this.mantantRetard = mantantRetard;
    }
    public BigDecimal getNombreMoisRetard(){
        return this.nombreMoisRetard;
    }
    public void setNombreMoisRetard(BigDecimal nombreMoisRetard){
        this.nombreMoisRetard = nombreMoisRetard;
    }
    public BigDecimal getMontantTotal(){
        return this.montantTotal;
    }
    public void setMontantTotal(BigDecimal montantTotal){
        this.montantTotal = montantTotal;
    }
    public LocalDateTime getDatePresentation(){
        return this.datePresentation;
    }
    public void setDatePresentation(LocalDateTime datePresentation){
        this.datePresentation = datePresentation;
    }
    public LocalDateTime getDateTaxeTnb(){
        return this.dateTaxeTnb;
    }
    public void setDateTaxeTnb(LocalDateTime dateTaxeTnb){
        this.dateTaxeTnb = dateTaxeTnb;
    }
    @ManyToOne(fetch = FetchType.LAZY)
    public Redevable getRedevable(){
        return this.redevable;
    }
    public void setRedevable(Redevable redevable){
        this.redevable = redevable;
    }
    @ManyToOne(fetch = FetchType.LAZY)
    public Terrain getTerrain(){
        return this.terrain;
    }
    public void setTerrain(Terrain terrain){
        this.terrain = terrain;
    }
    @ManyToOne(fetch = FetchType.LAZY)
    public TauxTaxTnb getTauxTaxTnb(){
        return this.tauxTaxTnb;
    }
    public void setTauxTaxTnb(TauxTaxTnb tauxTaxTnb){
        this.tauxTaxTnb = tauxTaxTnb;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        TaxTnb taxTnb = (TaxTnb) o;
        return id != null && id.equals(taxTnb.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

}

