import React from 'react';
import './Dashboard.css';

interface ISavedObject {
    id: string;
    name: string;
    type: string;
    index: string;
    fromDate: string;
    toDate: string;
    filterList: Array<{ filterField: string; filterType: string; filterValue: string }>;
    selectedFields: string[];
  }

interface IDashboardState {
  savedObjects: ISavedObject[];
  filteredObjects: ISavedObject[];
  searchQuery: string;
}

class Dashboard extends React.Component<{}, IDashboardState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      savedObjects: [],
      filteredObjects: [],
      searchQuery: '',
    };
  }

  componentDidMount() {
    // Simulating data fetch from local JSON
    const mockData: ISavedObject[] = [
      {
        id: '1',
        name: 'Matched Transactions Nov 2023',
        type: 'dashboard',
        index: 'matched_transactions',
        fromDate: '2023-11-01',
        toDate: '2023-11-30',
        filterList: [
          { filterField: 'AGENT_CODE', filterType: 'is', filterValue: 'NOSTRO ACC' },
        ],
        selectedFields: ['AGENT_CODE', 'COUNTRY', 'PRODUCT', 'VALUE_DATE'],
      },
      {
        id: '2',
        name: 'Unmatched Transactions Dec 2023',
        type: 'report',
        index: 'unmatched_transactions',
        fromDate: '2023-12-01',
        toDate: '2023-12-31',
        filterList: [
          { filterField: 'STATUS', filterType: 'is', filterValue: 'PENDING' },
        ],
        selectedFields: ['TRANSACTION_ID', 'AMOUNT', 'CURRENCY', 'STATUS'],
      },
      {
        id: '3',
        name: 'High Value Transactions Q4 2023',
        type: 'dashboard',
        index: 'all_transactions',
        fromDate: '2023-10-01',
        toDate: '2023-12-31',
        filterList: [
          { filterField: 'AMOUNT', filterType: 'greater than', filterValue: '1000000' },
        ],
        selectedFields: ['TRANSACTION_ID', 'AMOUNT', 'CURRENCY', 'VALUE_DATE', 'AGENT_CODE'],
      },
      {
        id: '4',
        name: 'Cross-Border Transactions 2023',
        type: 'report',
        index: 'international_transactions',
        fromDate: '2023-01-01',
        toDate: '2023-12-31',
        filterList: [
          { filterField: 'TRANSACTION_TYPE', filterType: 'is', filterValue: 'CROSS_BORDER' },
        ],
        selectedFields: ['TRANSACTION_ID', 'SENDER_COUNTRY', 'RECEIVER_COUNTRY', 'AMOUNT', 'CURRENCY'],
      },
    ];

    this.setState({ savedObjects: mockData, filteredObjects: mockData });
  }

  handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = event.target.value.toLowerCase();
    const filteredObjects = this.state.savedObjects.filter(obj =>
      obj.name.toLowerCase().includes(searchQuery)
    );
    this.setState({ searchQuery, filteredObjects });
  }

  render() {
    const { filteredObjects, searchQuery } = this.state;

    return (
      <div className="dashboard">
        <div className="table-header">
          <h1>Saved Reprots</h1>
          <button className="create-button">+Create</button>
        </div>
        <input
          type="text"
          placeholder="Search dashboards..."
          value={searchQuery}
          onChange={this.handleSearch}
          className="search-bar"
        />
        <table className="dashboard-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Index</th>
              <th>Date Range</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredObjects.map((obj) => (
              <tr key={obj.id}>
                <td>{obj.name}</td>
                <td>{obj.type}</td>
                <td>{obj.index}</td>
                <td>{`${obj.fromDate} to ${obj.toDate}`}</td>
                <td>
                  <button onClick={() => console.log('Edit', obj)}>Edit</button>
                  <button onClick={() => console.log('Delete', obj)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Dashboard;
