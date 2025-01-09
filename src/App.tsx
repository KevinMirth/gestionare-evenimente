import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({ nume_eveniment: '', tip_eveniment: '', locatie: '', status_eveniment: '', data: '' });

  const [showInputs, setShowInputs] = useState(false);

  const handleButtonClick = () => {
      setShowInputs(!showInputs);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/events/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
  
      const responseData = await response.json();
  
      if (!response.ok) {
        throw new Error(responseData.error || 'Something went wrong!');
      }

      alert('Eveniment adăugat cu succes!');
      setShowInputs(false); // Ascunde formularul după succes

    } catch (err: any) {
      console.log(err.message);
      alert('A apărut o eroare. Încearcă din nou.');
    }
  };

  return (
    <>
      <div style={{ padding: '20px' }}>
            <button onClick={handleButtonClick}>
                {showInputs ? 'Anulează' : 'Adaugă Eveniment'}
            </button>

            {showInputs && (
                <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
                    <input 
                    type="text" 
                    name="nume_eveniment"
                    placeholder="Nume Eveniment" 
                    value={formData.nume_eveniment}
                    onChange={handleChange}
                    required
                    style={{ display: 'block', marginBottom: '10px' }} />
                    
                    <input 
                    type="text" 
                    name="tip_eveniment"
                    placeholder="Tip Eveniment" 
                    value={formData.tip_eveniment}
                    onChange={handleChange}
                    required
                    style={{ display: 'block', marginBottom: '10px' }} />
                    
                    <input
                    type="text" 
                    name="locatie"
                    placeholder="Locație"
                    value={formData.locatie}
                    onChange={handleChange}
                    required
                    style={{ display: 'block', marginBottom: '10px' }} />
                    
                    <input 
                    type="text" 
                    name="status_eveniment"
                    placeholder="Status Eveniment"
                    value={formData.status_eveniment}
                    onChange={handleChange}
                    required
                    style={{ display: 'block', marginBottom: '10px' }} />
                    
                    <input 
                    type="date" 
                    name="data"
                    value={formData.data}
                    onChange={handleChange}
                    required
                    style={{ display: 'block', marginBottom: '10px' }} />
                    
                    <button type="submit">
                        Adaugă Eveniment
                    </button>
                </form>
            )}
        </div>
    </>
  )
}

export default App
