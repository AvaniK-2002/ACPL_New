import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import Form from "../components/Form";

const Card1 = () => {
  return (
    <div style={{
      backgroundColor: 'white',
      padding: '5px 15px',
      borderRadius: '0',
      textAlign: 'center',
      color: 'black',
      fontWeight: 'normal',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      margin: '15px',
      borderRight: '2px solid blue',
      borderBottom: '4px solid violet',
      width: '250px'
    }}>
      <h3 style={{ fontWeight: '600' }}>Card 1</h3>
      <p style={{ fontWeight: '500' }}>Delivering Impactful learning Solutions that exteeds expectations.</p>
    </div>
  );
};

const Card2 = () => {
  return (
    <div style={{
      backgroundColor: 'white',
      padding: '5px 15px',
      borderRadius: '0',
      textAlign: 'center',
      color: 'black',
      fontWeight: 'normal',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      margin: '15px',
      borderRight: '2px solid blue',
      borderBottom: '4px solid violet',
      width: '250px'
    }}>
      <h3 style={{ fontWeight: '600' }}>Card 2</h3>
      <p style={{ fontWeight: '500' }}>Delivering Impactful learning Solutions that exteeds expectations.</p>
    </div>
  );
};

const Card3 = () => {
  return (
    <div style={{
      backgroundColor: 'white',
      padding: '5px 15px',
      borderRadius: '0',
      textAlign: 'center',
      color: 'black',
      fontWeight: 'normal',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      margin: '15px',
      borderRight: '2px solid blue',
      borderBottom: '4px solid violet',
      width: '250px'
    }}>
      <h3 style={{ fontWeight: '600' }}>Card 3</h3>
      <p style={{ fontWeight: '500' }}>Delivering Impactful learning Solutions that exteeds expectations.</p>
    </div>
  );
};

const Card4 = () => {
  return (
    <div style={{
      backgroundColor: 'white',
      padding: '5px 15px',
      borderRadius: '0',
      textAlign: 'center',
      color: 'black',
      fontWeight: 'normal',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      margin: '15px',
      borderRight: '2px solid blue',
      borderBottom: '4px solid violet',
      width: '250px'
    }}>
      <h3 style={{ fontWeight: '600' }}>Card 4</h3>
      <p style={{ fontWeight: '500' }}>Delivering Impactful learning Solutions that exteeds expectations.</p>
    </div>
  );
};

const Card5 = () => {
  return (
    <div style={{ backgroundColor: 'lightblue', padding: '30px', borderRadius: '0', textAlign: 'center', color: 'black', fontWeight: 'normal', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', margin: '10px', position: 'relative' }}>
      <h3>Card 5</h3>
      <p>Content for Card 5</p>
      <div style={{ display: 'flex', flexDirection: 'column', position: 'absolute', top: '60%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0', marginBottom: '10px' }}>
          <Card1 />
          <Card2 />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0' }}>
          <Card3 />
          <Card4 />
        </div>
      </div>
    </div>
  );
};

const ThirdCard = () => {
  return (
    
    <div style={{ backgroundColor: 'aliceblue', padding: '20px', borderRadius: '10px',
     textAlign: 'left', color: 'black', fontWeight: 'normal', boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      marginTop: '50px', display: 'flex', height: '250px' }}>
      <div style={{ flex: 1, paddingRight: '20px' }}>
<button style={{ backgroundColor: 'lightpink', color: 'black', fontWeight: 'bolder', borderRadius: '10px', padding: '15px 30px',
   border: 'none', marginTop: '10px' }}>Our Core Values</button>
        <p> Our principles keep us aligned with what matters most --people,purpose and progress</p>

      </div>
      <div style={{ flex: 1 }}>
        <Card5 />
      </div>
    </div>
  );
};

const Card6 = () => {
  return (
    <div
      style={{
        display: "flex",
        maxWidth: "500px",
        margin: "40px auto",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        border: "2px solid #c8ccd1ff",
      }}
    >
      {/* Left Side - Text */}
      <div style={{ flex: 1, padding: "24px", backgroundColor: "#fff" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "12px" }}>
          Our Vision
        </h2>
        <p style={{ color: "#333", lineHeight: "1.6", fontSize: "0.95rem" }}>
          At our core, we believe in building technology that empowers people.
          Our vision is to create innovative digital solutions that inspire
          growth, drive transformation, and shape a brighter future.
          We aim to bridge creativity with functionality, ensuring that
          every project we deliver makes a lasting impact.
        </p>
      </div>

      {/* Right Side - Gradient */}
      <div
        style={{
          flex: 1,
          background: "linear-gradient(135deg, #e8f0ff, #f5f0ff)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="/Frame 70.png"
          alt="Frame 70"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
};

const Card7 = () => {
  return (
    <div
      style={{
        display: "flex",
        maxWidth: "500px",
        margin: "40px auto",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        border: "2px solid #c8ccd1ff",
      }}
    >
      {/* Left Side - Text */}
      <div style={{ flex: 1, padding: "24px", backgroundColor: "#fff" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "12px" }}>
          Our Mission
        </h2>
        <p style={{ color: "#333", lineHeight: "1.6", fontSize: "0.95rem" }}>
          Our mission is to deliver exceptional digital experiences that drive
          real results. We combine cutting-edge technology with creative
          strategies to help our clients achieve their goals and exceed
          expectations in an ever-evolving digital landscape.
        </p>
      </div>

      {/* Right Side - Gradient */}
      <div
        style={{
          flex: 1,
          background: "linear-gradient(135deg, #e8f0ff, #f5f0ff)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="/image 14.png"
          alt="Image 14"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
};

const Card8 = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "250px",
        margin: "40px 0",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",

        padding: "20px",
        backgroundColor: "#e8f0ff",
        textAlign: "center",
        color: "black",
      }}
    >
      <p style={{ fontSize: "30px", fontWeight: "bold" }}>
        Message From Our Director
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
        voluptatum.
      </p>
    </div>
  );
};

const founders = [
  {
    name: "Ajinkya D. Deshmukh",
    role: "Founder, Director & CEO",
    img: "", // Add image URL here
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Hrishikesh D. Mohite",
    role: "Founder, Director & COO",
    img: "", // Add image URL here
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Ruturaj Y. Kale",
    role: "Co-Founder, Director & CFO",
    img: "", // Add image URL here
    linkedin: "#",
    instagram: "#",
  },
];

const Card9 = () => {
  return (
    <section style={{ padding: "48px 0", backgroundColor: "white" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
        {/* Heading */}
        <h2 style={{
          fontSize: "2rem",
          fontWeight: "normal",
          marginBottom: "40px",
          color: "#111827"
        }}>
          The visionary founders behind Ajinkya Creation
        </h2>

        {/* Founders Grid */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "32px",
          flexWrap: "wrap"
        }}>
          {founders.map((founder, index) => (
            <div
              key={index}
              style={{
                width: "230px",
                textAlign: "center"
              }}
            >
              {/* Image Container */}
              <div style={{
                width: "170px",
                height: "170px",
                margin: "0 auto 20px",
                padding: "8px",
                backgroundColor: "white",
                borderRadius: "12px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
              }}>
                <img
                  src={founder.img || "/placeholder.jpg"}
                  alt={founder.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "8px"
                  }}
                />
              </div>

              {/* Name with Blue Line */}
              <div style={{ position: "relative", marginBottom: "8px" }}>
                <h3 style={{
                  fontSize: "1.25rem",
                  fontWeight: "600",
                  color: "#111827",
                  marginBottom: "4px"
                }}>{founder.name}</h3>
                <div style={{
                  width: "4px",
                  height: "55px",
                  backgroundColor: "#0ea5e9",
                  position: "absolute",
                  left: "-12px",
                  top: "-12px"
                }}></div>
              </div>

              {/* Role */}
              <p style={{
                fontSize: "0.875rem",
                color: "#6b7280",
                marginBottom: "12px"
              }}>{founder.role}</p>

              {/* Social Icons */}
              <div style={{
                display: "flex",
                gap: "4px",
                justifyContent: "center",
                marginTop: "4px"
              }}>
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div style={{
                    width: "24px",
                    height: "24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#0077B5",
                    borderRadius: "4px"
                  }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </div>
                </a>
                <a
                  href={founder.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div style={{
                    width: "24px",
                    height: "24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#E4405F",
                    borderRadius: "4px"
                  }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="white">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Card10 = () => {
  return (
    <div>
      <section style={{ padding: "20px", backgroundColor: "aliceblue", marginTop: "50px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          {/* Left Content */}
          <div style={{ flex: 1, paddingRight: "20px" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "16px" }}>
              Faces Behind Our Software Solution
            </h2>
            <p style={{ color: "#1c1d1eff", lineHeight: "1.625" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing. Lorem ipsum dolor
              sit amet, consectetur adipiscing. Lorem ipsum dolor sit amet,
              consectetur adipiscing.
            </p>
          </div>

          {/* Right Faces Section */}
          <div style={{ flex: 1, display: "flex", gap: "16px" }}>
            {/* Highlighted Image */}
            <div style={{ width: "140px", height: "180px", background: "linear-gradient(to bottom, #faf5ff, #eef2ff)", borderRadius: "12px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)", border: "2px solid lightpink" }}>
              <img src="\Frame 150.png" alt="Face" style={{ width: '100%', height: '100%', borderRadius: '12px' }} />
            </div>

            {/* Grey Placeholders */}
            <img src="/Frame 155.png" alt="Placeholder 1" style={{ width: "100px", height: "140px", borderRadius: "12px", border: "2px solid lightpink" }} />
            <img src="/Frame 156.png" alt="Placeholder 2" style={{ width: "100px", height: "140px", borderRadius: "12px", border: "2px solid lightpink" }} />
            <img src="/Frame 157.png" alt="Placeholder 3" style={{ width: "100px", height: "140px", borderRadius: "12px", border: "2px solid lightpink" }} />
            <img src="/Frame 158.png" alt="Placeholder 4" style={{ width: "100px", height: "140px", borderRadius: "12px", border: "2px solid lightpink" }} />
          </div>
        </div>
      </section>
      <Header />
      <Footer />
    </div>
  );
};

const About = () => {
  return (
    <div style={{ padding: '20px' }}>
      <div style={{ backgroundImage: 'url("/Frame128.png")', backgroundSize: 'cover', backgroundPosition: 'center',padding: '140px',
         borderRadius: '10px', textAlign: 'left', color: 'black', fontWeight: 'bold', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>

        <div style={{ fontSize: '30px', fontWeight: 'bold', marginTop: '-40px', marginLeft: '-20px' }}>Driving Digital Growth Through Custom Solutions</div>

      </div>
      <div style={{ backgroundColor: 'aliceblue', padding: '140px 130px 150px 40px', borderRadius: '10px', textAlign: 'left',
        color: 'black', fontWeight: 'bold', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', marginTop: '20px' }}>
        <div>
          <div style={{ fontSize: '30px', fontWeight: 'bold' }}>Who Are</div>
          <div style={{ display: 'flex', alignItems: 'center', fontSize: '30px' }}>
            <span style={{ fontWeight: 'bold', marginRight: '20px', background: 'linear-gradient(to right, #a855f7, #10b981)', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent' }}>WE</span>
            <span style={{ fontWeight: 'bold', fontSize: '20px' }}>design, develop and deliver digital brilliance.</span>
          </div>
          <div style={{ marginTop: '20px', marginLeft: '150px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button style={{ background: 'linear-gradient(lightblue, lightblue) padding-box, linear-gradient(to right, #a855f7, #10b981) border-box', color: 'black', fontWeight: 'bold', borderRadius: '10px', padding: '17px 45px', border: '3px solid transparent' }}>Foundation</button>
            <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#555' }}>➝</span>
            <button style={{ background: 'linear-gradient(lightblue, lightblue) padding-box, linear-gradient(to right, #a855f7, #10b981) border-box', color: 'black', fontWeight: 'bold', borderRadius: '10px', padding: '17px 45px', border: '3px solid transparent' }}>Innovation</button>
            <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#555' }}>➝</span>
            <button style={{ background: 'linear-gradient(lightblue, lightblue) padding-box, linear-gradient(to right, #a855f7, #10b981) border-box', color: 'black', fontWeight: 'bold', borderRadius: '10px', padding: '17px 45px', border: '3px solid transparent' }}>Future</button>
            <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#555' }}>➝</span>
            <button style={{ background: 'linear-gradient(lightblue, lightblue) padding-box, linear-gradient(to right, #a855f7, #10b981) border-box', color: 'black', fontWeight: 'bold', borderRadius: '10px', padding: '17px 45px', border: '3px solid transparent' }}>Growth</button>
          </div>
        </div>
      </div>
      <ThirdCard />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Card6 />
        <Card7 />
        <Card8 />
        <Card9 />
        <Card10 />

      </div>
    </div>
  )
}

export default About