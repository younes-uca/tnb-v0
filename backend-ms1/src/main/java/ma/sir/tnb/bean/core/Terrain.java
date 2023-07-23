package ma.sir.tnb.bean.core;

import java.util.Objects;






import com.fasterxml.jackson.annotation.JsonInclude;
import ma.sir.tnb.zynerator.audit.AuditBusinessObject;
import javax.persistence.*;
import java.util.Objects;




@Entity
@Table(name = "terrain")
@JsonInclude(JsonInclude.Include.NON_NULL)
@SequenceGenerator(name="terrain_seq",sequenceName="terrain_seq",allocationSize=1, initialValue = 1)
public class Terrain   extends AuditBusinessObject     {

    private Long id;

    @Column(length = 500)
    private String ref;

    private CategorieTerrain categorieTerrain ;
    
    private Redevable redevable ;
    


    public Terrain(){
        super();
    }

    public Terrain(Long id,String ref){
        this.id = id;
        this.ref = ref ;
    }




    @Id
    @Column(name = "id")
        @GeneratedValue(strategy = GenerationType.SEQUENCE,generator="terrain_seq")
    public Long getId(){
        return this.id;
    }
    public void setId(Long id){
        this.id = id;
    }
    public String getRef(){
        return this.ref;
    }
    public void setRef(String ref){
        this.ref = ref;
    }
    @ManyToOne(fetch = FetchType.LAZY)
    public CategorieTerrain getCategorieTerrain(){
        return this.categorieTerrain;
    }
    public void setCategorieTerrain(CategorieTerrain categorieTerrain){
        this.categorieTerrain = categorieTerrain;
    }
    @ManyToOne(fetch = FetchType.LAZY)
    public Redevable getRedevable(){
        return this.redevable;
    }
    public void setRedevable(Redevable redevable){
        this.redevable = redevable;
    }

    @Transient
    public String getLabel() {
        label = ref;
        return label;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Terrain terrain = (Terrain) o;
        return id != null && id.equals(terrain.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

}

