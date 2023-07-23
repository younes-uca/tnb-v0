package ma.sir.tnb.bean.core;

import java.util.Objects;






import com.fasterxml.jackson.annotation.JsonInclude;
import ma.sir.tnb.zynerator.audit.AuditBusinessObject;
import javax.persistence.*;
import java.util.Objects;




@Entity
@Table(name = "redevable")
@JsonInclude(JsonInclude.Include.NON_NULL)
@SequenceGenerator(name="redevable_seq",sequenceName="redevable_seq",allocationSize=1, initialValue = 1)
public class Redevable   extends AuditBusinessObject     {

    private Long id;

    @Column(length = 500)
    private String nom;
    @Column(length = 500)
    private String prenom;
    @Column(length = 500)
    private String cin;



    public Redevable(){
        super();
    }

    public Redevable(Long id,String cin){
        this.id = id;
        this.cin = cin ;
    }




    @Id
    @Column(name = "id")
        @GeneratedValue(strategy = GenerationType.SEQUENCE,generator="redevable_seq")
    public Long getId(){
        return this.id;
    }
    public void setId(Long id){
        this.id = id;
    }
    public String getNom(){
        return this.nom;
    }
    public void setNom(String nom){
        this.nom = nom;
    }
    public String getPrenom(){
        return this.prenom;
    }
    public void setPrenom(String prenom){
        this.prenom = prenom;
    }
    public String getCin(){
        return this.cin;
    }
    public void setCin(String cin){
        this.cin = cin;
    }

    @Transient
    public String getLabel() {
        label = cin;
        return label;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Redevable redevable = (Redevable) o;
        return id != null && id.equals(redevable.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

}

