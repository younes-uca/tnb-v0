package ma.sir.tnb.bean.history;

import com.fasterxml.jackson.annotation.JsonInclude;
import ma.sir.tnb.zynerator.history.HistBusinessObject;
import javax.persistence.*;


@Entity
@Table(name = "taux_tax_tnb")
@JsonInclude(JsonInclude.Include.NON_NULL)
@SequenceGenerator(name="taux_tax_tnb_seq",sequenceName="taux_tax_tnb_seq",allocationSize=1, initialValue = 1)
public class TauxTaxTnbHistory extends HistBusinessObject  {


    public TauxTaxTnbHistory() {
    super();
    }

    public TauxTaxTnbHistory (Long id) {
    super(id);
    }

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator="taux_tax_tnb_seq")
    public Long getId() {
    return id;
    }
}

