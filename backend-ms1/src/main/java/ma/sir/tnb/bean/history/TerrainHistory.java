package ma.sir.tnb.bean.history;

import com.fasterxml.jackson.annotation.JsonInclude;
import ma.sir.tnb.zynerator.history.HistBusinessObject;
import javax.persistence.*;


@Entity
@Table(name = "terrain")
@JsonInclude(JsonInclude.Include.NON_NULL)
@SequenceGenerator(name="terrain_seq",sequenceName="terrain_seq",allocationSize=1, initialValue = 1)
public class TerrainHistory extends HistBusinessObject  {


    public TerrainHistory() {
    super();
    }

    public TerrainHistory (Long id) {
    super(id);
    }

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator="terrain_seq")
    public Long getId() {
    return id;
    }
}

