import _Head from '../components/Head';
import Link from 'next/link';

const Admin = () => (
    <div>
        <_Head title="Admin Panel" />
        <div className="row">
            <div className="col-md-2 task-panel">
                <h1 className="admin-text"><strong>ADMIN</strong></h1>
                <Link href="#">
                    <button className="btn btn-dark panel-item">Yeni Yazı Oluştur</button>
                </Link>
                <Link href="#">
                    <button className="btn btn-dark panel-item">Mevcut Yazılar</button>
                </Link>
                <Link href="#">
                    <button className="btn btn-dark panel-item">Sayfalar</button>
                </Link>
                <Link href="#">
                    <button className="btn btn-dark panel-item">Yorumlar</button>
                </Link>
                <Link href="#">
                    <button className="btn btn-dark panel-item">Uyeler</button>
                </Link>
                <button className="btn btn-dark panel-item">Deneme</button>
            </div>
            <div className="col-md-10 my-container">
                <div className="admin-header">
                </div>
                <div className="main">

                </div>
            </div>
        </div>
        <style jsx>{`
        .admin-text{
            text-align: center;
            color: #333;
        }
    .panel-item{
        padding: 10px;
        margin: 10px 6px;
        color: #ddd;
        width: 100%;
    }
`}</style>
    </div>
);

export default Admin;

