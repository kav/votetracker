import React from 'react';
import { Link } from 'react-router';

import Submitable from './submitable';
import TimeSelect from './timeselect';
import PrecinctInput from './precinct-input';
import ContactInfo from './contact-info';

export default class PrimaryReport extends Submitable {

  render() {
    let statusMessage;
    if (this.state.submitted) {
      statusMessage = 'Submitted';
    }
    if (this.state.error) {
      statusMessage = 'Error submitting. Please check values and try again.';
    }
    return (
      <div className="PrimaryReportForm">
        <p>You can get turnout totals from your election official after you cast your ballot or even
         before walking in. Just ask for the total number of ballots cast in the Democratic primary
         at your polling location.</p>
        <p>When they give you the totals, ask:</p>
        <p>Does this include early vote or absentee ballots?</p>
        <p>Does this cover multiple precincts? If so, which ones?</p>
        <p>Is this total for all ballots or for the total Democratic ballots?
         Preferably, ask for the Democratic ballot total.</p>
        <p>Questions? Check out our <Link to="/faq">FAQ.</Link></p>
        <form ref={this.trackForm}>
        <input type="hidden" value="primary" name="report_type" />
        <PrecinctInput location={this.props.params.location} />
        <label>Report Type
          <select name="type">
            <option value="dem">Democratic Ballots</option>
            <option value="total">Total Ballots</option>
          </select>
        </label>
        <label>Total Ballots Cast:
          <input type="number" name="ballots_cast" />
          <span className="sub">(Count everybody who's voted in the
            Democratic Primary so far).</span>
        </label>
        <label>
          Includes Early/Absentee Ballots: <input type="checkbox" name="early_absentee" value="1" />
        </label>
        <TimeSelect />
        <ContactInfo />
        <label>
          <button type="submit" disabled={this.state.submitting}>Submit</button>
        {statusMessage}{this.errorMessage}</label>
        </form>
      </div>
    );
  }
}
