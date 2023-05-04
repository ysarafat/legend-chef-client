import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import React from 'react';
import { toast } from 'react-hot-toast';
import { ImDownload3 } from 'react-icons/im';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Spinner from '../Shared/Spinner/Spinner';

function Blog() {
    const blogs = useLoaderData();
    const navigation = useNavigation();

    const downloadPDF = () => {
        const capture = document.querySelector('.blog-down');
        html2canvas(capture).then((canvas) => {
            const imgData = canvas.toDataURL('img/png');
            const doc = new jsPDF('l', 'mm', 'a4');
            const componentWidth = doc.internal.pageSize.getWidth();
            const componentHeight = doc.internal.pageSize.getHeight();
            doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
            toast.success('Download Complete');
            doc.save('legend-blog.pdf');
        });
    };
    if (navigation === 'loading') {
        return <Spinner />;
    }

    return (
        <div className="my-16">
            <div className="">
                <button
                    className="flex justify-center items-center text-lg gap-4 h-11 bg-primary px-4 hover:bg-black duration-300 text-white rounded-lg  mx-auto"
                    onClick={downloadPDF}
                >
                    Download in PDF <ImDownload3 style={{ fontWeight: 'bold' }} size={20} />
                </button>
            </div>
            <div className="blog-down container mx-auto p-4 mt-6">
                <div className="bg-slate-200 p-4 rounded-lg  ">
                    {blogs?.map((blog) => (
                        <div
                            key={blog.id}
                            className=" bg-white rounded-lg p-5 my-3 text-lg font-medium"
                        >
                            <h1 className="text-2xl">Qus: {blog.qus}</h1>
                            <div className="mt-3">
                                <b>Ans:</b> <li className="mb-2 list-none">{blog.ans[0]}</li>
                                {blog.ans[1] && <li className="list-none">{blog.ans[1]}</li>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Blog;
