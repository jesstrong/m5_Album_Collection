using album_collection.Models;
using System;
using System.Collections.Generic;
using System.Text;
using Xunit;

namespace album_collection.Tests
{
    public class ArtistTest
    {
        Artist sut;

        public ArtistTest()
        {
            sut = new Artist();
            sut.Id = 1;
            sut.Name = "Michael Jackson";
            sut.Age = 50;
            sut.recordLabel = "Motown";
            sut.Hometown = "Indiana";
        }

        [Fact]
        public void Artist_Sets_Id_On_ArtistModel()
        {
            // Arrange

            // Act
            int id = sut.Id;

            // Assert
            Assert.Equal(1, id);
        }

        [Fact]
        public void Song_Sets_Name_On_ArtistModel()
        {
            // Arrange

            // Act
            string name = sut.Name;

            // Assert
            Assert.Equal("Michael Jackson", name);
        }

        [Fact]
        public void Song_Sets_Age_On_ArtistModel()
        {
            // Arrange

            // Act
            int age = sut.Age;

            // Assert
            Assert.Equal(50, age);
        }

        [Fact]
        public void Song_Sets_RecordLabel_On_ArtistModel()
        {
            // Arrange

            // Act
            string recordLabel = sut.recordLabel;

            // Assert
            Assert.Equal("Motown", recordLabel);
        }

        [Fact]
        public void Song_Sets_Hometown_On_ArtistModel()
        {
            // Arrange

            // Act
            string hometown = sut.Hometown;

            // Assert
            Assert.Equal("Indiana", hometown);
        }
    }
}
