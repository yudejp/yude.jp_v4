import Title from "./components/Title"


function BlogPage() {
    return (
        <div>
            <Title title="ページ一覧" />
            <p className="fs-2">ページ一覧</p>
            <div className="container" style={{minHeight: "300px"}}>
            </div>
        </div>
    );
}

export default BlogPage;
