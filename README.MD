# Grafana Dashboard Migration

This project facilitates the migration of Grafana dashboards from one instance to another. Use the provided Docker image to export dashboards from a source instance and import them into a destination instance.

## Features

- **Export Dashboards**: Exports dashboards from the source instance.
- **Import Dashboards**: Imports dashboards into the destination instance.

## Prerequisites

- **Docker**: Ensure Docker is installed on your system. You can download it here.

## Using Docker

To perform the dashboard migration, follow these steps:

1. **Run the Docker Container**:
    
    Use the command below to run the provided Docker image:
    
    ```
    docker run --network="host" -it --rm leonardozwirtes/grafana-migration
    ```
    
    The container will prompt you for the following information:
    
    - **Source URL**: URL of the Grafana source instance.
    - **Source API Key**: API key for authentication with the source instance.
    - **Destination URL**: URL of the Grafana destination instance.
    - **Destination API Key**: API key for authentication with the destination instance.
    
    Example input:
    
    ```mathematica
    🔗 Enter the source URL: https://grafana.source.example.com
    🔑 Enter the source API key: <YOUR_SOURCE_API_KEY>
    🔗 Enter the destination URL: https://grafana.destination.example.com
    🔑 Enter the destination API key: <YOUR_DESTINATION_API_KEY>
    ```
    
2. **The container will export and import dashboards**:
    - **Exports dashboards** from the source instance.
    - **Imports dashboards** into the destination instance.

## Notes

- **Docker Network Configuration**: The `-network="host"` parameter is used to allow the container to access services on the local host (e.g., Grafana running on your machine). Ensure the Docker network is configured correctly for communication between the container and the Grafana service.

## Contributing

If you wish to contribute to this project, feel free to submit pull requests or open issues to discuss improvements.

## License

This project is licensed under the MIT License.