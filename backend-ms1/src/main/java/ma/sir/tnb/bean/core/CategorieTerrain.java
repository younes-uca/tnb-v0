package ma.sir.tnb.bean.core;

import java.util.Objects;






import com.fasterxml.jackson.annotation.JsonInclude;
import ma.sir.tnb.zynerator.audit.AuditBusinessObject;
import javax.persistence.*;
import java.util.Objects;




@Entity
@Table(name = "categorie_terrain")
@JsonInclude(JsonInclude.Include.NON_NULL)
@SequenceGenerator(name="categorie_terrain_seq",sequenceName="categorie_terrain_seq",allocationSize=1, initialValue = 1)
public class CategorieTerrain   extends AuditBusinessObject     {

    private Long id;

    @Column(length = 500)
    private String code;
    @Column(length = 500)
    private String libelle;



    public CategorieTerrain(){
        super();
    }

    public CategorieTerrain(Long id,String libelle){
        this.id = id;
        this.libelle = libelle ;
    }




    @Id
    @Column(name = "id")
        @GeneratedValue(strategy = GenerationType.SEQUENCE,generator="categorie_terrain_seq")
    public Long getId(){
        return this.id;
    }
    public void setId(Long id){
        this.id = id;
    }
    public String getCode(){
        return this.code;
    }
    public void setCode(String code){
        this.code = code;
    }
    public String getLibelle(){
        return this.libelle;
    }
    public void setLibelle(String libelle){
        this.libelle = libelle;
    }

    @Transient
    public String getLabel() {
        label = libelle;
        return label;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        CategorieTerrain categorieTerrain = (CategorieTerrain) o;
        return id != null && id.equals(categorieTerrain.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

}

