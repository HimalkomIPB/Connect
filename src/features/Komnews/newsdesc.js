import React from 'react'
import "./Newsdesc.css"
import Card from "../../component/Komnews/Card"
import Data from "../../component/Komnews/newsdata"
import Navbar from "../../component/Navbar/Navbar"
import Footer from "../../component/Footer/Footer"
import Dummy from "../../Assets/Komnews/dummy.png"

const Newsdesc = () => {


    const cards = Data.map(item => {
        return (
            <Card
                key={item.id}
                title={item.title}
                img={item.img}
                date={item.date}
            />
        )
    })
  return (
    <div>
        <Navbar/>
            <div className='form-desc'>
                <div className='icon-desc'>
                    <div className='icon1'>KOMNEWS</div>
                    <div className='icon2'>Category</div>
                </div>
                <div className='main-desc'>
                    <h1 className='title-desc'>Student Portal IPB University Dukung Aktivitas Merdeka Belajar Kampus Merdeka (MBKM)</h1>
                    <p className='date-desc'>23-12-2021</p>
                    <img src={Dummy} className="img-desc"/>
                    <p className='text-desc'>IPB University sosialisasikan Student Portal untuk mendukung kegiatan Merdeka Belajar Kampus Merdeka (MBKM), 13/12. Student portal merupakan aplikasi yang diperuntukkan bagi mahasiswa IPB University dalam mendukung aktivitas akademik dan kemahasiswaan.
                        Dr Alim Setiawan Slamet, Direktur Kemahasiswaan dan Pengembangan Karir (Ditmawa PK) IPB University, mengatakan bahwa dalam kurun empat tahun terakhir IPB University secara bertahap melakukan transformasi digital. Transformasi digital ini tujuan utamanya adalah untuk meningkatkan pelayanan kepada stakeholder, salah satunya mahasiswa IPB University.

                        “Banyak sekali sistem informasi yang sudah dikembangkan IPB University, baik berbasis web maupun aplikasi mobile,” kata Dr Alim dalam Sosialisasi Student Portal yang diselenggarakan oleh Fakultas Matematika dan Ilmu Pengetahuan Alam (FMIPA) IPB University, 13/12.
                        Oleh karena itu, lanjutnya, Direktorat Sistem Informasi dan Transformasi Digital (DSITD) IPB University kemudian melakukan integrasi. Integrasi tersebut mulai dari data hingga integrasi berbagai sistem. Hasilnya berupa Student Portal dengan laman studentportal.ipb.ac.id untuk mahasiswa dan HR Portal dengan laman hrportal.ipb.ac.id untuk dosen.

                        “Student Portal bisa mengakodomasi terkait kebutuhan akademik, kemahasiswaan, dan lain sebagainya. Student Portal kaitannya untuk pelaporan, pengakuan, serta  penyetaraan program Merdeka Belajar Kampus Merdeka (MBKM) dan multi aktivitas,” jelas Dr Alim.

                        Fitur-fitur yang tersedia dalam Student Portal berkaitan dengan akademik, kemahasiswaan, dan lain sebagainya yang menunjang mahasiswa. Dr Alim menyebutkan, dalam fitur kemahasiswaan terdapat beasiswa, pelaporan aktivitas MBKM, exchange, hingga pengajuan proposal lomba.
                        “Jadi kalau mahasiswa ikut lomba dan butuh pendanaan, pengajuan proposalnya lewat Student Portal. Di Student Portal juga ada fitur pelayanan kesehatan seperti pembuatan BPJS kolektif. Ada juga terkait pengurusan uang kuliah tunggal (UKT),” terangnya.

                        Menurut Asisten Direktur Perencanaan dan Informasi Pendidikan, Direktorat Administrasi Pendidikan dan Penerimaan Mahasiswa Baru (DAPPMB) IPB University, Angga Yuhistira Aryanto, Student Portal merupakan gabungan dari Sistem Informasi Akademik (Simak) dan Sistem Informasi Kemahasiswaan (Simawa) IPB University.
                        “Diharapkan dengan satu pintu ini mahasiswa tidak kesulitan untuk membuka berbagai portal,” katanya.  Lebih lanjut Angga mengatakan, Student Portal mendukung aktivitas MBKM. Ia mengatakan, pengakuan dan penyetaraan aktivitas MBKM bisa dilakukan dalam satu sistem tersebut.

                        “Kalau penyetaraan mata kuliah berarti kegiatannya disetarakan dengan mata kuliah di IPB University. Kalau pengakuan mata kuliah kegiatannya seperti pertukaran pelajar, mata kuliahnya diambil dari perguruan tinggi yang diikuti di luar IPB University,” jelasnya.

                        Dalam penyetaran MBKM, mahasiswa melakukan izin dan konsultasi dengan dosen penggerak, melakukan pengisian Kartu Rencana Studi (KRS) dan Berita Acara Aktivitas (BAA) di laman studentportal.ipb.ac.id, serta melakukan klaim aktivitas.

                        “Sedangkan dosen pembimbing melakukan penilaian terhadap BAA yang diajukan mahasiswa di laman hrportal.ipb.ac.id,” ujarnya.

                        Setelah diklaim oleh mahasiswa, tim yang ditunjuk program studi akan melakukan pemberian huruf mutu dari kegiatan-kegiatan yang disetarakan dengan mata kuliah. Tim program studi melaporkan kepada operator Simak untuk menginput nilai mata kuliah hasil penyetaraan pada laman simak.ipb.ac.id.

                        “Keempat pihak tersebut berperan dan menjadi kunci dalam proses penyetaraan MBKM. Jadi, mahasiswa harus koordinasi dan konsultasi dengan dosen pembimbing, mahasiswa juga koordinasi dengan tim program studi komisi akademik (komdik) maupun komisi kemahasiswaan (komsis), dan terakhir ke operator simak,” pungkasnya. (MHT)
                    </p>
                </div>
                <div className='desc-footer'>
                    <h1>TERKAIT</h1>
                    <div className='desc-card'>
                        {cards}
                    </div>
                </div>

            </div>
        <Footer/>
    </div>
  )
}

export default Newsdesc