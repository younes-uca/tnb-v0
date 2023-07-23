package ma.sir.tnb.bean.history;

import com.fasterxml.jackson.annotation.JsonInclude;
import ma.sir.tnb.zynerator.history.HistBusinessObject;
import javax.persistence.*;


@Entity
@Table(name = "categorie_terrain")
@JsonInclude(JsonInclude.Include.NON_NULL)
@SequenceGenerator(name="categorie_terrain_seq",sequenceName="categorie_terrain_seq",allocationSize=1, initialValue = 1)
public class CategorieTerrainHistory extends HistBusinessObject  {


    public CategorieTerrainHistory() {
    super();
    }

    public CategorieTerrainHistory (Long id) {
    super(id);
    }

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator="categorie_terrain_seq")
    public Long getId() {
    return id;
    }
}

