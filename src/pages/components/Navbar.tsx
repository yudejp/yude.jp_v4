import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    return (
        <>
            <div className="container mx-5 mt-4  aligns-items-center">
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <a className="nav-link disabled text-body" href="#" tabIndex={-1} aria-disabled="true">yude.jp</a>
                    </li>
                    <div className="input-group mb-3 my-nav">
                        <input type="text" className="form-control" placeholder="なにをお探しですか？" aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                    </div>
                </ul>
            </div>
        </>
    )
}