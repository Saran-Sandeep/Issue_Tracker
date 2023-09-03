import './App.css';
import React from 'react';

const issues = [
  {
    id : 101,
    title : "Error in installing server",
    status : "open"
  },
  {
    id : 102,
    title : "Error in running the server",
    status : "open"
  }
];

class IssueRow extends React.Component {
  render() {
    const issue = this.props.issue;
    return (
      <tr>
        <td>{issue.id}</td>
        <td>{issue.title}</td>
        <td>{issue.status}</td>
      </tr>
    )
  }
}


class IssueFilter extends React.Component {
  render() {
    return (
      <>
        <h1>Placeholder for Issue Filter</h1>
      </>
    );
  }
}

class IssueTable extends React.Component {
  render() {
    const issue_map = issues.map(i => <IssueRow key = {i.id} issue = {i} />);
    return (
      <>
      <h1>Placeholder for Issue Table</h1>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {issue_map}
          </tbody>
        </table>
      </>
    )
  }
}

class IssueAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    var frm = document.forms.issue_add;
    this.props.createIssue({
      title : frm.title.value,
      status : frm.status.value
    });

    // clearing the form for next use
    frm.title.value = "";
    frm.status.value = "";

  }
  render() {
    return (
      <>
        <h1>Placeholder for Issue Add</h1>
        <form name='issue_add' onSubmit={this.handleSubmit}>
          <label htmlFor="title">Enter issue name : </label>
          <input type="text" name="title" id="" />
          <label htmlFor="status">Enter Status : </label>
          <input type="text" name="status" id="" />
          <button type='submit'>Add</button>
        </form>
      </>
    )
  }
}

class IssueTracker extends React.Component {
  constructor() {
    super();
    this.state = { issues : [] };
    // this.createTestIssue = this.createTestIssue.bind(this);
    // setTimeout(this.createTestIssue, 2000);
    this.createIssue = this.createIssue.bind(this);
  }

  componentDidMount(){
    this.loadData();
  }

  loadData() {
    setTimeout(() => {
      this.setState({issues : issues});
    }, 500);
  }

  createIssue(newIssue) {
    const id = this.state.issues.length+101;
    newIssue.id = id;
    this.state.issues.push(newIssue);
    this.setState({ issues: this.state.issues });
    }
  // createTestIssue() {
  //   const id = this.state.issues.length+101;
  //   this.state.issues.push({
  //     id : id,
  //     title : "Error in exporting App",
  //     status : "closed"
  //   });

  //   this.setState({issues : this.state.issues});
  // }

  render() {
    return(
      <>
        <h1>Issue Tracker</h1>    <hr />
        <IssueFilter />         <hr />
        <IssueTable />          <hr />
        <IssueAdd createIssue = {this.createIssue}/>            <hr />
        {/* <button type="button" onClick={this.createTestIssue}>Add</button> */}
      </>
    )
  }
}


class App extends React.Component {

  render() {
    return (
      <IssueTracker issues={issues}/>
    )
  }

}


export default App;