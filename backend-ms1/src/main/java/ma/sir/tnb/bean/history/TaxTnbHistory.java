package ma.sir.tnb.bean.history;

import com.fasterxml.jackson.annotation.JsonInclude;
import ma.sir.tnb.zynerator.history.HistBusinessObject;
import javax.persistence.*;


@Entity
@Table(name = "tax_tnb")
@JsonInclude(JsonInclude.Include.NON_NULL)
@SequenceGenerator(name="tax_tnb_seq",sequenceName="tax_tnb_seq",allocationSize=1, initialValue = 1)
public class TaxTnbHistory extends HistBusinessObject  {


    public TaxTnbHistory() {
    super();
    }

    public TaxTnbHistory (Long id) {
    super(id);
    }

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator="tax_tnb_seq")
    public Long getId() {
    return id;
    }
}

