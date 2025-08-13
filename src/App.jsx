// src/App.jsx
import Welcome from './Welcome';

function App() {
  return (
    <div>
      {/* ส่ง props ชื่อ name และมีค่าเป็น "นักศึกษา" */}
      <Welcome name="Akkapan" />
      <Welcome name="Thanit" />
    </div>
  );
}

export default App;