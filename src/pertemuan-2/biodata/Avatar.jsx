export default function Avatar() {
  return (
    <div className="avatar-container">
      <img 
        src="img/avatar.jpg" 
        alt="foto"
        style={{ 
          borderRadius: '50%', 
          width: '150px', 
          height: '150px', 
          objectFit: 'cover', 
          border: '4px solid #646cff' 
        }}
      />
    </div>
  );
}