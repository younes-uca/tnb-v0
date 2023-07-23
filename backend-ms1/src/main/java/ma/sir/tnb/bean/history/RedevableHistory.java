package ma.sir.tnb.bean.history;

import com.fasterxml.jackson.annotation.JsonInclude;
import ma.sir.tnb.zynerator.history.HistBusinessObject;
import javax.persistence.*;


@Entity
@Table(name = "redevable")
@JsonInclude(JsonInclude.Include.NON_NULL)
@SequenceGenerator(name="redevable_seq",sequenceName="redevable_seq",allocationSize=1, initialValue = 1)
public class RedevableHistory extends HistBusinessObject  {


    public RedevableHistory() {
    super();
    }

    public RedevableHistory (Long id) {
    super(id);
    }

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator="redevable_seq")
    public Long getId() {
    return id;
    }
}

