import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
export default function SwaggerPage() {
    return (
        <div>
            <SwaggerUI url="total_recall_swagger.yml" />
        </div>
    );
}
