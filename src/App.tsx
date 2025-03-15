import './App.css';
import { CheckList } from './CheckList';

function App() {
  return (
    <div className='p-10'>
      <CheckList
        data={[
          { id: 1, name: 'Lucy', role: 'Manager' },
          { id: 2, name: 'Bob', role: 'Developer' },
          { id: 3, name: 'Bob', role: 'Developer' },
          { id: 4, name: 'Bob', role: 'Developer' },
          { id: 5, name: 'Bob', role: 'Developer' },
          { id: 6, name: 'Bob', role: 'Developer' },
          { id: 7, name: 'Bob', role: 'Developer' },
          { id: 8, name: 'Bob', role: 'Developer' },
        ]}
        id='id'
        primary='name'
        secondary='role'
        style={{
          width: '300px',
          maxHeight: '380px',
          overflowY: 'auto',
        }}
      />
    </div>
  );
}

export default App;
