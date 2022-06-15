import React from 'react'
import "../Style/Portfolio.css"

export default function Portfolio() {
  return (
    <div className="portfolio">
      <div className="port-content">
        <h1>Portfolio</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, magnam.</p>
        <hr />
      </div>
      <div className="port">
        <div className="row1">
          <div className="port-box1"><img src="https://cdn1.vectorstock.com/i/1000x1000/45/40/young-freelancer-programmer-coding-with-laptop-vector-26644540.jpg" alt="" /></div>
          <div className="port-box2"><img src="https://cdn1.vectorstock.com/i/1000x1000/76/20/programmer-working-on-laptop-vector-22287620.jpg" alt="" /></div>
          <div className="port-box3"><img src="https://cdn5.vectorstock.com/i/1000x1000/61/94/web-developer-programmer-flat-vector-25036194.jpg" alt="" /></div>
        </div>
        <div className="row2">
          <div className="port-box1"><img src="https://cdn5.vectorstock.com/i/1000x1000/77/54/young-developer-programmer-working-flat-character-vector-25117754.jpg" alt="" /></div>
          <div className="port-box2"><img src="https://cdn4.vectorstock.com/i/1000x1000/36/38/task-manager-mobile-work-online-system-vector-21763638.jpg" alt="" /></div>
          <div className="port-box3"><img src="https://cdn5.vectorstock.com/i/1000x1000/63/34/young-programmer-man-character-coding-flat-vector-20666334.jpg" alt="" /></div>
        </div>
        <div className="row3">
          <div className="port-box1"><img src="https://cdn4.vectorstock.com/i/1000x1000/26/38/professional-programmer-character-smiling-man-vector-21172638.jpg" alt="" /></div>
          <div className="port-box2"><img src="https://image.shutterstock.com/z/stock-vector-man-sitting-with-crossed-legs-using-laptop-office-supplies-flying-around-isolated-cartoon-vector-1228062340.jpg" alt="" /></div>
          <div className="port-box3"><img src="https://cdn2.vectorstock.com/i/1000x1000/76/66/students-e-learning-online-cartoon-concept-vector-22767666.jpg" alt="" /></div>
        </div>
      </div>
    </div>
  )
}
